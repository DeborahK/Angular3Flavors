import {Component}          from 'angular2/core';
import {HTTP_PROVIDERS}     from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {WelcomeComponent}   from './home/welcome.component';
import {MovieListComponent} from './movies/movie-list.component';
import {MovieDetailComponent} from './movies/movie-detail.component';
import {MovieService}       from './movies/movie.service';

@Component({
    selector: 'mh-app',
    template: `
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{title}}</a>
                <ul class="nav navbar-nav">
                    <li><a class="nav navbar-nav"
                        [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Movies']">Movie List</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        MovieService
    ]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/movies', name: 'Movies', component: MovieListComponent },
    { path: '/movie/:id', name: 'MovieDetail', component: MovieDetailComponent }
])
export class AppComponent {
    title: string = "InStep Movie Hunter"
}