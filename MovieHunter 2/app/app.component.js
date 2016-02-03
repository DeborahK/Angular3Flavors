System.register(['angular2/core', 'angular2/http', 'angular2/router', './home/welcome.component', './movies/movie-list.component', './movies/movie-detail.component', './movies/movie.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, welcome_component_1, movie_list_component_1, movie_detail_component_1, movie_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (movie_list_component_1_1) {
                movie_list_component_1 = movie_list_component_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "InStep Movie Hunter";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-app',
                        template: "\n    <div>\n        <nav class=\"navbar navbar-default\">\n            <div class=\"container-fluid\">\n                <a class=\"navbar-brand\">{{title}}</a>\n                <ul class=\"nav navbar-nav\">\n                    <li><a class=\"nav navbar-nav\"\n                        [routerLink]=\"['Welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['Movies']\">Movie List</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n     ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            movie_service_1.MovieService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/movies', name: 'Movies', component: movie_list_component_1.MovieListComponent },
                        { path: '/movie/:id', name: 'MovieDetail', component: movie_detail_component_1.MovieDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map