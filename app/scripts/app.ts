module app {

  angular.module('app', [
    'ui.router'
  ])

    // Configs
    .config(app.config.StateProviderConfiguration.prototype.injection())

    // Controllers
    .controller('HomeController', app.home.HomeController.prototype.injection())

    // Services
    .service('HomeService', app.home.HomeService.prototype.injection())

    // Directives
    .directive("myDirective", app.common.MyDirective.instance)

    // Filters
    .filter("customUppercase", app.common.CustomUppercase.injection())
    ;
}
