import 'es6-shim';
import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';
import 'rxjs/add/operator/map';
import {Provider, provide, platform, PLATFORM_DIRECTIVES} from 'angular2/core';
import {HashLocationStrategy, LocationStrategy} from "angular2/router";
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app';

import {LocalStorageService} from './core/local-storage.service';
import {LocalStorageServiceWorker} from './core/local-storage.worker.service';

import {
    WORKER_APP_APPLICATION,
    WORKER_APP_PLATFORM,
    WORKER_APP_ROUTER
} from 'angular2/platform/worker_app';

let platformRef = platform([WORKER_APP_PLATFORM])
    .asyncApplication(null,[
        WORKER_APP_APPLICATION,
        WORKER_APP_ROUTER,
        HTTP_PROVIDERS,
        new Provider(LocationStrategy, { useClass: HashLocationStrategy })
    ]);
platformRef.then((ref) => {
    ref.bootstrap(App)
});
