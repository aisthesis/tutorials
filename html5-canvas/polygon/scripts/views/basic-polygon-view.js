var _c = _c || {};
_c.app = _c.app || {};
_c.app.views = _c.app.views || {};

(function(_cg) {
    "use strict";
    _cg.BasicPolygonView = Backbone.View.extend({
        initialize: function(options) {
            _.bindAll(this,
                'render',
                'setConstants'
            );

            this.setConstants(options);
            this.render();
        },

        render: function() {
            var polygon = new _c.draw.RegularPolygon({
                center: new _c.draw.Point(this.el.width / 2, this.el.height / 2),
                radius: this.el.width / 4,
                sides: 8,
                angle: Math.PI / 2,
                styles: {
                    fillStyle: 'cornflowerblue',
                    strokeStyle: 'goldenrod',
                    lineWidth: 8
                }
            });

            polygon.draw(this.CONTEXT);
            polygon.styles.lineWidth = 2;
            polygon.styles.strokeStyle = 'red';
            polygon.stroke(this.CONTEXT);
            polygon.radius = polygon.radius / 2;
            polygon.angle = Math.PI / 8;
            polygon.resetVertices();
            polygon.styles.fillStyle = 'saddlebrown';
            polygon.fill(this.CONTEXT);
        },

        setConstants: function(options) {
            this.CONTEXT = this.el.getContext('2d');
        }
    });
})(_c.app.views);
