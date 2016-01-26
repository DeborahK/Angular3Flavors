System.register(['angular2/core', '../common/movieFilter.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movieFilter_pipe_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movieFilter_pipe_1_1) {
                movieFilter_pipe_1 = movieFilter_pipe_1_1;
            }],
        execute: function() {
            // Interface defining the properties and methods
            // that the controller class intents to provide
            // interface IMovieListModel {
            //     title: string;
            //     showImage: boolean;
            //     message: string;
            //     movies: app.domain.IMovie[];
            //     toggleImage(): void;
            // }
            MovieListComponent = (function () {
                function MovieListComponent() {
                    this.showImage = false;
                    this.movies = [
                        {
                            director: "Peter Jackson",
                            imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg",
                            movieId: 1,
                            mpaa: "pg-13",
                            releaseDate: "2001-12-19T00:00:00",
                            title: "The Lord of the Rings: The Fellowship of the Ring",
                            price: 12.95,
                            starRating: 4.925,
                            approvalRating: .97
                        },
                        {
                            director: "Peter Jackson",
                            imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg",
                            movieId: 2,
                            mpaa: "pg-13",
                            releaseDate: "2002-12-18T00:00:00",
                            title: "The Lord of the Rings: The Two Towers",
                            price: 14.95,
                            starRating: 4.6,
                            approvalRating: .94
                        },
                        {
                            director: "Peter Jackson",
                            imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King_small.jpg",
                            movieId: 3,
                            mpaa: "pg-13",
                            releaseDate: "2003-12-17T00:00:00",
                            title: "The Lord of the Rings: The Return of the King",
                            price: 15.95,
                            starRating: 4.98,
                            approvalRating: .9995 },
                        {
                            director: "Fred Wolf",
                            imageurl: null,
                            movieId: 4,
                            mpaa: "nr",
                            releaseDate: "1971-02-02T00:00:00",
                            title: "The Point",
                            price: 9.95,
                            starRating: 4.5,
                            approvalRating: .9295
                        }
                    ];
                }
                MovieListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                MovieListComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                MovieListComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-movie-list',
                        templateUrl: 'app/movies/movieListView.html',
                        styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
                        pipes: [movieFilter_pipe_1.MovieFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieListComponent);
                return MovieListComponent;
            })();
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map