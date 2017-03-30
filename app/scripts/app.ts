namespace app {

  /**
   * Main angular module.
   */
  angular.module('app', [
    'ui.router',
    'app.config'
  ])

    /**
     * Configs
     */
    .config(app.configs.CompileConfiguration)
    .config(app.configs.StateProviderConfiguration)

    /**
     * Controllers
     */
    .controller('HomeController', app.home.HomeController)

    /**
     * Services
     */
    .service('HomeService', app.home.HomeService)

    /**
     * Directives
     */
    .directive('myDirective', app.directives.MyDirective.factory())

    /**
     * Filters
     */
    .filter('customUppercase', app.filters.CustomUppercase.factory())
    ;
}
