import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

    transform(value: any, args: string[]): any {
        let result: any = [];
        let filter = args[0].toLocaleLowerCase();
        if (!filter)
        {
            return value;
        }
        value.forEach(movie => {
            if (movie.title.toLocaleLowerCase().indexOf(filter) > -1) {
                result.push(movie);
            }
        })
        return result;
    }
}