import {Component, OnInit}  from 'angular2/core';

import {IMovie}             from './movie'
import {MovieService}       from './movie.service';
import {MovieFilterPipe}    from '../common/movieFilter.pipe'

@Component({
    selector: 'mh-movie-list',
    templateUrl: 'app/movies/movieListView.html',
    styleUrls: ['app/movies/movieStyle.css'],
    pipes: [MovieFilterPipe]
})
export class MovieListComponent implements OnInit {
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