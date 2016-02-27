"use strict";
require('es6-shim');
require('zone.js/dist/zone.min.js');
require('reflect-metadata');
require('rxjs/add/operator/map');
var core_1 = require('angular2/core');
var worker_render_1 = require('angular2/platform/worker_render');
var appRef = core_1.platform([worker_render_1.WORKER_RENDER_PLATFORM])
    .application([
    worker_render_1.WORKER_RENDER_APP,
    new core_1.Provider(worker_render_1.WORKER_SCRIPT, { useValue: 'loader.js' }),
    worker_render_1.WORKER_RENDER_ROUTER
]);
