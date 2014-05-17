define([
    'jquery',
    'underscore',
    'backbone',
    'usr/draw'
], function(
    $,
    UsRet,
    BbRet,
    Draw) {
    "use strict";

    var MagnifyView = Backbone.View.extend({
        events: {
            'mousedown': 'handleMouseDown',
            'mousemove': 'handleMouseMove',
            'mouseup': 'handleMouseUp'
        },

        initialize: function(options) {
            _.bindAll(this,
                'render',
                'setConstants',
                'initMembers',
                'drawMagnifier',
                'handleMouseDown',
                'handleMouseMove',
                'handleMouseUp',
                'moveMagnifier'
            );

            this.setConstants(options);
            this.initMembers(options);
            this.render();
        },

        render: function() {
            var _this = this;

            this.image.src = '../common/canyon.png';
            this.image.onload = function(event) {
                _this.CONTEXT.drawImage(_this.image, 0, 0);
                _this.offscreenContext.drawImage(_this.image,
                        0, 0, _this.image.width, _this.image.height, 
                        0, 0, _this.offscreenCanvas.width, _this.offscreenCanvas.height);
                _this.drawMagnifier();
            };
        },

        setConstants: function(options) {
            this.CONTEXT = this.el.getContext('2d');
            this.CIRCLE_RADIUS = 64;
            this.MAGNIFICATION = 1.5;
            this.OFFSET_FACTOR = 1.0 - this.MAGNIFICATION;
        },

        initMembers: function(options) {
            this.offscreenCanvas = document.createElement('canvas');
            this.offscreenCanvas.width = this.el.width * this.MAGNIFICATION;
            this.offscreenCanvas.height = this.el.height * this.MAGNIFICATION;
            this.offscreenContext = this.offscreenCanvas.getContext('2d');
            this.circle = new Draw.Circle({
                center: new Draw.Point(this.el.width / 2, this.el.height / 2),
                radius: this.CIRCLE_RADIUS,
                strokeStyle: 'white',
                lineWidth: 2
            });
            this.image = new Image();
            this.dragging = false;
            this.mousedown = new Draw.Point(0, 0);
            this.origCenter = new Draw.Point(this.circle.center.x, this.circle.center.y);
            // used to store event locations
            this.eventLoc = new Draw.Point(0, 0);
            this.offset = new Draw.Vector(0, 0);
        },

        drawMagnifier: function() {
            var _this = this;

            this.circle.clip(this.CONTEXT, function() {
                _this.CONTEXT.drawImage(_this.offscreenCanvas, _this.circle.center.x * _this.OFFSET_FACTOR,
                    _this.circle.center.y * _this.OFFSET_FACTOR);
            });
            this.circle.stroke(this.CONTEXT);
        },

        handleMouseDown: function(event) {
            if (this.dragging) {
                this.dragging = false;
                return;
            }
            Draw.CanvasUtils.windowToCanvas(this.el, event.clientX, event.clientY, this.mousedown);
            if (!this.circle.contains(this.mousedown)) { return; }
            this.origCenter = new Draw.Point(this.circle.center.x, this.circle.center.y);
            this.dragging = true;
        },

        handleMouseMove: function(event) {
            if (!this.dragging) { return; }
            this.moveMagnifier(event);
        },

        handleMouseUp: function(event) {
            if (!this.dragging) { return; }
            this.dragging = false;
            this.moveMagnifier(event);
        },

        moveMagnifier: function(event) {
            Draw.CanvasUtils.getOffset(this.el, this.mousedown, event, this.eventLoc, this.offset);
            this.origCenter.offset(this.offset, this.circle.center);
            this.CONTEXT.drawImage(this.image, 0, 0);
            this.drawMagnifier();
        }
    });

    return MagnifyView;
});
