namespace app.config {

  /**
   * This class represents state provider configuration.
   */
  export class StateProviderConfiguration {

    public injection(): any[] {
      return ['$stateProvider', '$urlRouterProvider', StateProviderConfiguration];
    }

    /**
     * Creates an instance of StateProviderConfiguration.
     * @param {ng.ui.IStateProvider} $stateProvider - The injected $stateProvider.
     * @param {ng.ui.IUrlRouterProvider} $urlRouterProvider - The injected $urlRouterProvider.
     * @constructor
     */
    constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        });

      // If none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home');
    }
  }
}
