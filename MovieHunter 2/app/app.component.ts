import {Component}          from 'angular2/core';
import {HTTP_PROVIDERS}     from 'angular2/http';

import {MovieService}       from './movies/movie.service';
import {MovieListComponent} from './movies/movie-list.component';

@Component({
    selector: 'mh-app',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h2 class="title">{{title}}</h2>
            </div>
            <div class="panel-body"><mh-movie-list>Loading movies ... </mh-movie-list></div>
         </div>
         `,
    styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'], 
    directives: [MovieListComponent],
  providers: [
    HTTP_PROVIDERS,
    MovieService
  ]
})
export class AppComponent {
    public title: string = "Movie Hunter"
}