//Filename: app.js

define([
    // These are path alias that we configured in our bootstrap
    'jquery',     // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone',    // lib/backbone/backbone
    'bootstrap',
    'usr/draw',
    'scripts/views/country-road-view',
    'scripts/views/rectangles-view',
    'scripts/views/image-manip-view',
    'scripts/views/sunglasses-view',
    'scripts/views/magnify-view'
], function(
    $, 
    _, 
    Backbone, 
    Bootstrap, 
    Draw,
    CountryRoadView,
    RectanglesView,
    ImageManipView,
    SunglassesView,
    MagnifyView) {
        var init = function() {
            var _countryRoadView = new CountryRoadView({
                    el: '#country-road'
                }),
                _rectanglesView = new RectanglesView({
                    el: '#rectangles'
                }),
                _imageManipView = new ImageManipView({
                    el: '#image-manip'
                }),
                _sunglassesView = new SunglassesView({
                    el: '#sunglasses'
                }),
                _magnifyView = new MagnifyView({
                    el: '#magnify'
                });
            console.log("app loaded!");
        }

        return {
            init: init
        };
});
