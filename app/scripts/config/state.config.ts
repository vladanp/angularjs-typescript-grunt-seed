namespace app.config {

  export class StateProviderConfiguration {

    public injection(): any[] {
      return ['$stateProvider', '$urlRouterProvider', StateProviderConfiguration];
    }

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
