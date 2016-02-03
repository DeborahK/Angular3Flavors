import {Component, OnInit}  from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {IMovie} from './movie'
import {MovieService} from './movie.service';
import {MovieFilterPipe} from '../common/movieFilter.pipe'
import {StarComponent} from "../common/star.component";

@Component({
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie.style.css'],
    directives: [ROUTER_DIRECTIVES, StarComponent],
    pipes: [MovieFilterPipe]
})
export class MovieListComponent implements OnInit {
    pageTitle: string = "Movie List";
    showImage: boolean;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {
        this.showImage = false;
    }

    ngOnInit() {this.getMovies();}

    getMovies() {
           this._movieService.getMovies()
                     .subscribe(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error); 
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    convertToDate(dateString): Date {
        return new Date(dateString);
    }
}