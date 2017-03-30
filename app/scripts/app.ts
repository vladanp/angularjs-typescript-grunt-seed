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
    .config(app.config.CompileConfiguration)
    .config(app.config.StateProviderConfiguration)

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
    .directive('myDirective', app.common.MyDirective.factory())

    /**
     * Filters
     */
    .filter('customUppercase', app.common.CustomUppercase.factory())
    ;
}
