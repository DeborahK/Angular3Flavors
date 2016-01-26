module app.domain {
    export interface IMovie {
        director: string;
        imageurl: string;
        movieId: number;
        mpaa: string;
        releaseDate: string;
        title: string;
    }

    export class Movie implements IMovie {
        constructor(public director: string,
                    public imageurl: string,
                    public movieId: number,
                    public mpaa: string,
                    public releaseDate: string,
                    public title: string) {
        }
    }
}