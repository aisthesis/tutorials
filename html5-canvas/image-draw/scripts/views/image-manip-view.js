define([
    'jquery',
    'underscore',
    'backbone',
    'scripts/views/arch-orig-view'
], function(
    $,
    UsRet,
    BbRet,
    ArchOrigView) {
    "use strict";

    var ImageManipView = Backbone.View.extend({
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
        },

        initMembers: function(options) {
            this.archOrigView = new ArchOrigView({
                el: '#arch-orig'
            });
        }
    });

    return ImageManipView;
});
