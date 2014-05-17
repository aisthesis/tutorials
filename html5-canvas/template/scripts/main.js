var _c = _c || {};
_c.path = _c.path || {};
_c.path.usr = '../usr/';
_c.path.images = '../common/';

require.config({
    baseUrl: '.',

    paths: {
        'canvasView': 'scripts/views/canvas-view',
        'jquery': '../lib/jquery-2.0.3.min',
        'bootstrap': '../lib/bootstrap-3.0.0/js/bootstrap.min',
        'underscore': '../lib/underscore-1.5.2.min',
        'Backbone': '../lib/backbone-1.1.0.min',
        'draw': '../usr/draw/main'
    },

    shim: {
        'canvasView': ['Backbone'],
        'Backbone': ['underscore', 'jquery'],
        'bootstrap': ['jquery']
    }
});

require(['jquery', 'bootstrap', 'underscore', 'Backbone', 'draw', 'canvasView'], 
    function($, bootstrap, _, Backbone, draw, canvasView) {
        'use strict';
        _c.app.main = {};
        _c.app.main.canvasView = new _c.app.views.CanvasView({
            el: '#game-canvas'
        }); 
    });
