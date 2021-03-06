import 'es6-shim';
import 'zone.js/dist/zone.min.js';
import 'reflect-metadata';
import 'rxjs/add/operator/map';
import {platform, provide, Provider} from 'angular2/core';
import {
  WORKER_RENDER_APP,
  WORKER_RENDER_PLATFORM,
  WORKER_SCRIPT,
  WORKER_RENDER_ROUTER
} from 'angular2/platform/worker_render';

let appRef = platform([WORKER_RENDER_PLATFORM])
  .application([
    WORKER_RENDER_APP,
    new Provider(WORKER_SCRIPT, {useValue: 'loader.js'}),
    WORKER_RENDER_ROUTER
  ]);
