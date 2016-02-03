import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {IMovie} from './movie'
import {MovieService} from './movie.service';
import {StarComponent} from "../common/star.component";

@Component({
    templateUrl: 'app/movies/movie-detail.component.html',
    styleUrls: ['app/movies/movie.style.css'],
    directives: [ROUTER_DIRECTIVES, StarComponent]
})
export class MovieDetailComponent {
    pageTitle: string = "Movie Detail";
    movie: IMovie;
    errorMessage: string;

    constructor(private _movieService: MovieService,
                private _routeParams: RouteParams) {
    }

    ngOnInit() { 
        let id = parseInt(this._routeParams.get('id'),10);
        this.getMovie(id); 
    }

    getMovie(id: number) {
        this._movieService.getMovie(id)
            .subscribe(
                movie => this.movie = movie,
                error => this.errorMessage = <any>error);
    }

    convertToDate(dateString): Date {
        return new Date(dateString);
    }

}