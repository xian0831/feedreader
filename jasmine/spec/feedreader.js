/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('has URLs defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            })
        })


        it('has Names defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            })
        })
    });


    describe('The menu', function() {


        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })


        it('is shwo/hidden by menu when clicked', function() {
            // first click shall show menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            // second click shall hide the menu
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        })

    });


    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            })
        });

        it('has at least a single .entry element within .feed container', function() {
            expect($('.feed .entry').length).not.toBeGreaterThan(0);
        })


    });

    describe('New Feed Selection', function() {
        var initFeed;
        var loadedFeed;
        beforeEach(function(done){
            loadFeed(0, function() {
                initFeed = $('.feed').html();
                done();
            })

        });

        beforeEach(function(done){
            loadFeed(1, function() {
                loadedFeed = $('.feed').html();
                done();
            })
        });

        it('changed content when loadFeed function is called', function(){
            expect(initFeed).not.toEqual(loadedFeed);
        });
    })


}());
