var app = angular.module('app', []);

app.run(function ($rootScope) {
    $rootScope.hidden = {'side': [], 'back': []};

    if (localStorage.hidden) {
        try {
            $rootScope.hidden = JSON.parse(localStorage.hidden);
        } catch (e) {}
    } else {
        localStorage.hidden = JSON.stringify($rootScope.hidden);
    }

    $rootScope.highlighted = {};
    if (localStorage.highlighted) {
        try {
            $rootScope.highlighted = JSON.parse(localStorage.highlighted);
        } catch (e) {}
    }
});

app.service('converter', function ($rootScope, $http) {
    var linkMap = new Map(links);
    var columns = {
        'A': 'time',
        'B': 'duration',
        'C': 'nr',
        'E': 'who',
        'F': 'title'
    };
    var columnsSide = {
        'H': 'time',
        'I': 'duration',
        'J': 'nr',
        'L': 'who',
        'M': 'title'
    }
    var isFirstGet = true;

    function parse(data, side) {
        var backSchedule = [];
        var sideSchedule = [];
        data.feed.entry.forEach(function (entry) {
            var rowNr = entry.title.$t.substr(1);
            var col = entry.title.$t[0];
            var row;
            if (col < 'H') {
                row = backSchedule[rowNr] || (backSchedule[rowNr] = {});
                if (col in columns) {
                    if (columns[col] === 'title' && linkMap.has(entry.content.$t)) {
                        row.url = linkMap.get(entry.content.$t);
                    }
                    row[columns[col]] = entry.content.$t;
                }
            } else {
                row = sideSchedule[rowNr] || (sideSchedule[rowNr] = {});
                if (col in columnsSide) {
                    if (columnsSide[col] === 'title' && linkMap.has(entry.content.$t)) {
                        row.url = linkMap.get(entry.content.$t);
                    }
                    row[columnsSide[col]] = entry.content.$t;
                }
            }
        });

        backSchedule.forEach(function (entry, i) {
            if (!entry.nr && (!sideSchedule[i] || !sideSchedule[i].title)) {
                sideSchedule[i] = entry;
            }
        });

        var schedule = side ? sideSchedule : backSchedule;

        schedule = schedule.filter(function (entry) {
            return !(entry.who in {'"Back Track"': 1, '"Side Track"': 1, "Who?": 1});
        });

        var groupedSchedule = [];
        var section;
        schedule.forEach(function (entry) {
            if (!entry.who && entry.time && entry.time.indexOf('Day') === 0) {
                var index = groupedSchedule.length;
                section = {
                    title: entry.time,
                    entries: [],
                    index: index,
                    hidden: side ? $rootScope.hidden.side[index] : $rootScope.hidden.back[index]
                };
                groupedSchedule.push(section);
                return;
            }
            if (section) {
                if (entry.time) {
                    entry.time = entry.time.replace(/^'/,'');
                }
                entry.section = groupedSchedule.length - 1;
                section.entries.push(entry);
            }
        });

        return groupedSchedule;
    }

    this.dataUrl = 'https://spreadsheets.google.com/feeds/cells/1kjFshBwdJzAz4IT-02ZTPUTtQYYl4zk9IxuwsohOTos/od4/public/basic?alt=json';

    this.get = function (callback, side) {
        if (localStorage['data']) {
            callback(parse(JSON.parse(localStorage['data']), side));
            if (!isFirstGet) {
                return;
            }
        }
        this.fetch(callback, side);
        isFirstGet = false;
    };

    this.fetch = function (callback, side) {
        $http.get(this.dataUrl).success(function(data, status, headers, config) {
            localStorage['data'] = JSON.stringify(data);
            callback(parse(data, side));
        });
    };
});

app.controller('TrackController', function ($rootScope, $scope, $window, converter) {
    $scope.track = localStorage.track || 'back';
    $scope.scrollTop = {'back': 0, 'side': 0};
    if (localStorage.scrollTop) {
        $scope.scrollTop = JSON.parse(localStorage.scrollTop);
        angular.element(document).ready(function () {
            var content = document.querySelector('.mdl-layout__content');
            content.scrollTop = $scope.scrollTop[$scope.track];
        });
    }

    converter.get(function (entries) {
        $scope.schedule = entries;
    }, $scope.track !== 'back');


    var content = document.querySelector('.mdl-layout__content');
    content.onscroll = content.ontouchend = function() {
        $scope.scrollTop[$scope.track] = content.scrollTop;
        localStorage.scrollTop = JSON.stringify($scope.scrollTop);
    };


    $scope.selected = function (entry) {
        var classes = $rootScope.highlighted[entry.section + '.' + entry.nr] ? ['highlighted'] : [];

        if (!entry.time || !entry.duration) {
            return classes;
        }

        var time = entry.time.split('.');
        var now = new Date();

        var start = new Date("2017-05-05T00:00:00+02:00");
        start.setHours(entry.section * 24 + +time[0], +time[1], 0, 0);
        if (+now < +start) {
            return classes;
        }

        var end = new Date("2017-05-05T00:00:00+02:00");
        end.setHours(entry.section * 24 + +time[0], +time[1] + +entry.duration, 0, 0);
        if (+now >= +end) {
            return classes;
        }

        return classes.concat(['selected']);
    };

    $scope.switchTrack = function (track) {
        var content = document.querySelector('.mdl-layout__content');
        $scope.scrollTop[$scope.track] = content.scrollTop;
        $scope.track = track;
        converter.get(function (entries) {
            $scope.schedule = entries;
        }, $scope.track !== 'back');
        content.scrollTop = $scope.scrollTop[$scope.track];
        localStorage.track = $scope.track;
    }

    $scope.toggle = function (section) {
        $rootScope.hidden[$scope.track][section.index] = section.hidden = !section.hidden;
        localStorage.hidden = JSON.stringify($rootScope.hidden);
    };

    $scope.toggleHighlight = function (entry, event) {
        if (event.target.tagName === 'A' || !entry.nr) {
            return;
        }
        var key = entry.section + '.' + entry.nr;
        $rootScope.highlighted[key] = !$rootScope.highlighted[key];
        localStorage.highlighted = JSON.stringify($rootScope.highlighted);
    }
});
