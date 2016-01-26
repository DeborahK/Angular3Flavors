var app;
(function (app) {
    var movieList;
    (function (movieList) {
        // Controller class
        var MovieListCtrl = (function () {
            function MovieListCtrl(dataAccessService, title, showImage, message, movies) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = title;
                this.showImage = showImage;
                this.message = message;
                this.movies = movies;
                this.title = "Movie Hunter";
                this.showImage = false;
                var movieResource = dataAccessService.getMovieResource();
                movieResource.query(function (data) {
                    _this.movies = data;
                });
            }
            MovieListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            MovieListCtrl.$inject = ["dataAccessService"];
            return MovieListCtrl;
        })();
        angular
            .module("movieHunter")
            .controller("MovieListCtrl", MovieListCtrl);
    })(movieList = app.movieList || (app.movieList = {}));
})(app || (app = {}));
