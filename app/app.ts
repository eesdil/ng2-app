import {
    Component,
    Injector,
    Provider,
    provide,
    ElementRef,
    Renderer
} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ExampleView} from './views';

@Component({
    selector: 'app',
    providers: [
        Http,
        HTTP_PROVIDERS
    ],
    directives: [RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/', component: ExampleView, as: 'Example'}
])
class App {

    constructor(
            private elementRef: ElementRef,
            private renderer: Renderer
            ){
    }
}

export { App }
