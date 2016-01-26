(function () {
    "use strict";
    var app = angular
        .module("movieResourceMock", ["ngMockE2E"]);
    app.run(function ($httpBackend) {
        var movies = [
            {
                director: "Peter Jackson",
                imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg",
                movieId: 1,
                mpaa: "pg-13",
                releaseDate: "2001-12-19T00:00:00",
                title: "The Lord of the Rings: The Fellowship of the Ring"
            },
            {
                director: "Peter Jackson",
                imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg",
                movieId: 2,
                mpaa: "pg-13",
                releaseDate: "2002-12-18T00:00:00",
                title: "The Lord of the Rings: The Two Towers"
            },
            {
                director: "Peter Jackson",
                imageurl: "http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King_small.jpg",
                movieId: 3,
                mpaa: "pg-13",
                releaseDate: "2003-12-17T00:00:00",
                title: "The Lord of the Rings: The Return of the King"
            },
            {
                director: "Fred Wolf",
                imdbLink: "http://www.imdb.com/title/tt0067595/?ref_=fn_al_tt_1",
                imageurl: null,
                movieId: 4,
                mpaa: "nr",
                releaseDate: "1971-02-02T00:00:00",
                title: "The Point"
            }
        ];
        var moviesUrl = "http://localhost:1561/api/movies";
        $httpBackend.whenGET(moviesUrl).respond(movies);
        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function (method, url, data) {
            return [200, movies, {}];
        });
        // Pass through any requests for html files
        $httpBackend.whenGET(/\.html$/).passThrough();
    });
}());
//# sourceMappingURL=movieResourceMock.js.map