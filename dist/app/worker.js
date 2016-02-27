"use strict";
require('es6-shim');
require('zone.js/dist/zone.min.js');
require('reflect-metadata');
require('rxjs/add/operator/map');
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var http_1 = require('angular2/http');
var app_1 = require('./app');
var worker_app_1 = require('angular2/platform/worker_app');
var platformRef = core_1.platform([worker_app_1.WORKER_APP_PLATFORM])
    .asyncApplication(null, [
    worker_app_1.WORKER_APP_APPLICATION,
    worker_app_1.WORKER_APP_ROUTER,
    http_1.HTTP_PROVIDERS,
    new core_1.Provider(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
platformRef.then(function (ref) {
    ref.bootstrap(app_1.App);
});
