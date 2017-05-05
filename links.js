const links = [
    ["The Browser Hackers Guide To Instantly Loading Everything", "http://2017.jsconf.eu/speakers/addy-osmani-the-browser-hackers-guide-to-instantly-loading-everything.html"],
    ["What's new in Netscape Navigator 2.0", "http://2017.jsconf.eu/speakers/2017-03-23-marc-szczepanski-whats-new-in-netscape-navigator-20.html"],
    ["Immutable data structures for functional JS", "http://2017.jsconf.eu/speakers/anjana-vakil-immutable-data-structures-for-functional-js.html"],
    ["NESpectre: The Massively Multi-Haunted NES", "http://2017.jsconf.eu/speakers/zachary-johnson-nespectre-the-massively-multihaunted-nes.html"],
    ["YES, your site too can (and should) be accessible. Lessons learned from building FT.com", "http://2017.jsconf.eu/speakers/laura-carvajal-yes-your-site-too-can-and-should-be-accessible-lessons-learned-from-building-ftcom.html"],
    ["Maintaining an OSS Project (Babel)", "http://2017.jsconf.eu/speakers/henry-zhu-maintaining-an-oss-project-babel.html"],
    ["How To Be A Web A/V Artist", "http://2017.jsconf.eu/speakers/ruth-john-how-to-be-a-web-av-artist.html"],
    ["Pavlov’s Dog & Foucault’s Panopticon: Hacking My Anxiety With Open-Source Technology", "http://2017.jsconf.eu/speakers/jessica-tran-pavlovs-dog-foucaults-panopticon-hacking-my-anxiety-with-opensource-technology.html"],
    ["Building High-Quality JavaScript Tools", "http://2017.jsconf.eu/speakers/chris-pojer-building-high-quality-javascript-tools.html"],
    ["knock-knock-who-there-file-compression-TALK-FINAL-4.tar.trz.bz2.gz", "http://2017.jsconf.eu/speakers/irina-shestak-knockknockwhotherefilecompressiontalkfinal4tartrzbz2gz.html"],
    ["Dynamic video in the browser", "http://2017.jsconf.eu/speakers/matthew-shotton-dynamic-video-in-the-browser.html"],
    ["Keeping passwords safe in 2017", "http://2017.jsconf.eu/speakers/emil-bay-keeping-passwords-safe-in-2017.html"],
    ["You don't need AMP for that", "http://2017.jsconf.eu/speakers/chen-shay-you-dont-need-amp-for-that.html"],
    ["Weakest Link", "http://2017.jsconf.eu/speakers/meno-abels-weakest-link.html"],
    ["Sequential Art, Comics & SVGs", "http://2017.jsconf.eu/speakers/zahra-jabini-sequential-art-comics-svgs.html"],
    ["Sociolinguistics and the Javascript community: a love story", "http://2017.jsconf.eu/speakers/harriet-lawrence-sociolinguistics-and-the-javascript-community-a-love-story.html"],
    ["Emoji, Web Components, and Art", "http://2017.jsconf.eu/speakers/monica-dinculescu-emoji-web-components-and-art.html"],
    ["Barriers to Entry in the JavaScript Community", "http://2017.jsconf.eu/speakers/khalid-barriers-to-entry-in-javascript-communities.html"],
    ["Can You Read Me? Creative JavaScript to Make Computer Science Fun", "http://2017.jsconf.eu/speakers/mariko-kosaka-suz-hinton-can-you-read-me-creative-javascript-to-make-computer-science-fun.html"],
    ["How to Break an API: How Community Values Influence Practices", "http://2017.jsconf.eu/speakers/christian-kaestner-how-to-break-an-api-how-community-values-influence-practices.html"],
    ["A Brief History of Modularity", "http://2017.jsconf.eu/speakers/ashley-williams-a-brief-history-of-modularity.html"],
    ["How Does Javascript Math?", "http://2017.jsconf.eu/speakers/meara-charnetzki-how-does-javascript-math.html"],
    ["Making the Jump: How Desktop-Era Frameworks Can Thrive on Mobile", "http://2017.jsconf.eu/speakers/tom-dale-making-the-jump-how-desktopera-frameworks-can-thrive-on-mobile.html"],
    ["Keep the Internet Weird", "http://2017.jsconf.eu/speakers/rachel-white-keep-the-internet-weird.html"],
    ["How It's Made: opening jsconf.eu", "http://2017.jsconf.eu/speakers/kahlil-boris-jan-martin-how-its-made-opening-jsconfeu.html"],
    ["Party Day 1 - TBD", "http://2014.jsconf.eu/news/2014/09/01/saturday-night-party.html"],
    ["Applying NASA coding standards to JavaScript", "http://2017.jsconf.eu/speakers/denis-radin-applying-nasa-coding-standards-to-javascript.html"],
    ["From Advocacy to Innovation: How JS Developers will shape the future of Internet Security, Privacy, and Trust", "http://2017.jsconf.eu/speakers/amelia-abreu-from-advocacy-to-innovation-how-js-developers-will-shape-the-future-of-internet-security-privacy-and-trust.html"],
    ["JavaScript engines - how do they even?", "http://2017.jsconf.eu/speakers/franziska-hinkelmann-javascript-engines-how-do-they-even.html"],
    ["The Past, Present, and Future of JavaScript Date and Time APIs", "http://2017.jsconf.eu/speakers/matt-johnson-the-past-present-and-future-of-javascript-date-and-time-apis.html"],
    ["Parsing JavaScript - better lazy than eager?", "http://2017.jsconf.eu/speakers/marja-hoelttae-parsing-javascript-better-lazy-than-eager.html"],
    ["Source maps through the looking glass", "http://2017.jsconf.eu/speakers/ben-vinegar-source-maps-through-the-looking-glass.html"],
    ["The Ethics of the Internet of Things", "http://2017.jsconf.eu/speakers/emily-gorcenski-the-ethics-of-the-internet-of-things.html"],
    ["Let's go big", "http://2017.jsconf.eu/speakers/alexander-reardon-lets-go-big.html"],
    ["A Cartoon Intro to WebAssembly", "http://2017.jsconf.eu/speakers/lin-clark-a-cartoon-intro-to-webassembly.html"],
    ["My gender is emoji pizza unicorn: shipping expanded gender options", "http://2017.jsconf.eu/speakers/tilde-ann-thurium-my-gender-is-emoji-pizza-unicorn-shipping-expanded-gender-options.html"],
    ["Down the Rabbit Hole: Javascript in Wonderland", "http://2017.jsconf.eu/speakers/claudia-hernndez-down-the-rabbit-hole-javascript-in-wonderland.html"],
    ["Sharing is Caring - Patterns for JavaScript Library Design", "http://2017.jsconf.eu/speakers/maggie-pint-sharing-is-caring-patterns-for-javascript-library-design.html"],
    ["Preact: Into the void 0", "http://2017.jsconf.eu/speakers/jason-miller-preact.html"],
    ["Invisible Code: Building JavaScript Libraries For Non-Technical People", "http://2017.jsconf.eu/speakers/john-fawcett-Invisible-code-building-javascript-libraries-for-non-technical-people.html"],
    ["Real world connectivity: Beyond the bubble", "http://2017.jsconf.eu/speakers/ben-schwarz-real-world-connectivity-beyond-the-bubble.html"],
    ["Two Problems: Regular Expressions for Revolutionaries", "http://2017.jsconf.eu/speakers/sarah-saltrick-meyer-two-problems-regular-expressions-for-revolutionaries.html"],
    ["Go Offline First to Save The World", "http://2017.jsconf.eu/speakers/maureen-mcelaney-go-offline-first-to-save-the-world.html"],
    ["Æsthetics of code.", "http://2017.jsconf.eu/speakers/jan-krutisch-aesthetics-of-code.html"],
    ["Calendar / Kalender / تقويم (aka, the fun of locali[zs]ation)", "http://2017.jsconf.eu/speakers/paul-verbeekmast-calendar-kalender-aka-the-fun-of-localizsation.html"],
    ["Shared Memory & Parallel Programming with JavaScript", "http://2017.jsconf.eu/speakers/nidin-vinayakan-shared-memory-parallel-programming-with-javascript.html"],
    ["Outbreak: index-sw-9a4c43b4b4778e7d1ca619eaaf5ac1db.js", "http://2017.jsconf.eu/speakers/alexander-pope-outbreak-indexsw9a4c43b4b4778e7d1ca619eaaf5ac1dbjs.html"],
    ["Bringing Back the 1990s: The Revenge of JavaScript Style Sheets", "http://2017.jsconf.eu/speakers/steve-kinney-bringing-back-the-1990s-the-revenge-of-javascript-style-sheets.html"],
    ["The Legacy of the JavaScript Community", "http://2017.jsconf.eu/speakers/whitney-williams-the-legacy-of-the-javascript-community.html"],
];
