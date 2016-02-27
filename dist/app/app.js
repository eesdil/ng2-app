"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var views_1 = require('./views');
var App = (function () {
    function App(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [
                http_1.Http,
                http_1.HTTP_PROVIDERS
            ],
            directives: [router_1.RouterOutlet],
            template: "\n        <router-outlet></router-outlet>\n    "
        }),
        router_1.RouteConfig([
            { path: '/', component: views_1.ExampleView, as: 'Example' }
        ]), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], App);
    return App;
}());
exports.App = App;
