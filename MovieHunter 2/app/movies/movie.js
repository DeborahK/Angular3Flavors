var app;
(function (app) {
    var domain;
    (function (domain) {
        var Movie = (function () {
            function Movie(director, imageurl, movieId, mpaa, releaseDate, title) {
                this.director = director;
                this.imageurl = imageurl;
                this.movieId = movieId;
                this.mpaa = mpaa;
                this.releaseDate = releaseDate;
                this.title = title;
            }
            return Movie;
        })();
        domain.Movie = Movie;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=movie.js.map