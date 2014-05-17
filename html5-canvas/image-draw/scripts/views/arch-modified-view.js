define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    UsRet,
    BbRet) {
    "use strict";

    var ArchModifiedView = Backbone.View.extend({
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
        },

        setConstants: function(options) {
            this.CONTEXT = this.el.getContext('2d');
        },

        initMembers: function(options) {
            this.imageData = options.imageData;
            this.CONTEXT.putImageData(this.imageData, 0, 0);
        }
    });

    return ArchModifiedView;
});
