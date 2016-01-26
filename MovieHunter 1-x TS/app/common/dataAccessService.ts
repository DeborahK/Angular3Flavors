module app.common {
    interface IDataAccessService {
        getMovieResource(): ng.resource.IResourceClass<IMovieResource>;
    }

    interface IMovieResource
        extends ng.resource.IResource<app.domain.IMovie> {
    }

    export class DataAccessService
        implements IDataAccessService {

        static $inject = ["$resource", "appSettings"];
        constructor(private $resource: ng.resource.IResourceService, private appSettings: any) {

        }
        
        getMovieResource(): ng.resource.IResourceClass<IMovieResource> {
             return this.$resource(this.appSettings.serverPath + "/api/movies/:movieId");
        }
    }

    angular
        .module("common.services")
        .service("dataAccessService",
            DataAccessService);
}