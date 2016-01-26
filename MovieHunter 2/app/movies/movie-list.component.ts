import {Component} from 'angular2/core';

// Interface defining the properties and methods
// that the controller class intents to provide
// interface IMovieListModel {
//     title: string;
//     showImage: boolean;
//     message: string;
//     movies: app.domain.IMovie[];
//     toggleImage(): void;
// }

@Component({
    selector: 'mh-movie-list',
    templateUrl: 'app/movies/movieListView.html',
    styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css']
})
export class MovieListComponent {
    public showImage: boolean;
    public movies: any[];
    constructor() {
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

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}