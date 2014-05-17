define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    UsRet,
    /*
     * backbone.js doesn't return anything, so
     * labeling this variable Backbone actually obfuscates
     * the Backbone object and sets it to 'undefined'.
     * Similarly for `_` with underscore
     */
    BbRet) {
    "use strict";
    var CountryRoadView = Backbone.View.extend({
        initialize: function(options) {
            _.bindAll(this,
                'render',
                'setConstants',
                'initMembers'
            );

            this.setConstants(options);
            this.initMembers(options);
            this.render();
        },

        render: function() {
            //this.CONTEXT.drawImage(this.image, 0, 0, this.$el.width, this.$el.height);
        },

        setConstants: function(options) {
            this.CONTEXT = this.el.getContext('2d');
        },

        initMembers: function(options) {
            var _this = this;

            _this.image = new Image();
            _this.image.src = 'resources/images/countrypath.jpg';
            _this.image.onload = function(event) {
                _this.CONTEXT.drawImage(_this.image, 0, 0);
            };
        }
    });

    return CountryRoadView;
});
