var app;
(function (app) {
    var common;
    (function (common) {
        angular
            .module("common.services", ["ngResource"])
            .constant("appSettings", {
            serverPath: "http://localhost:1561"
        });
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=common.services.js.map