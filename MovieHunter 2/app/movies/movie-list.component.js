System.register(['angular2/core', './movie.service', '../common/movieFilter.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movie_service_1, movieFilter_pipe_1;
    var MovieListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            },
            function (movieFilter_pipe_1_1) {
                movieFilter_pipe_1 = movieFilter_pipe_1_1;
            }],
        execute: function() {
            MovieListComponent = (function () {
                function MovieListComponent(_movieService) {
                    this._movieService = _movieService;
                    this.showImage = false;
                }
                MovieListComponent.prototype.ngOnInit = function () { this.getMovies(); };
                MovieListComponent.prototype.getMovies = function () {
                    var _this = this;
                    this._movieService.getMovies()
                        .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
                };
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
                        styleUrls: ['app/movies/movieStyle.css'],
                        pipes: [movieFilter_pipe_1.MovieFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [movie_service_1.MovieService])
                ], MovieListComponent);
                return MovieListComponent;
            })();
            exports_1("MovieListComponent", MovieListComponent);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map