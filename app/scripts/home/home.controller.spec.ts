namespace test {

  describe('Home Controller', () => {
    // Declare dependencies and common vars
    let homeController: app.home.HomeController,
      homeService: app.home.HomeService,
      $state: ng.ui.IStateService,
      $http: ng.IHttpService;

    // Setup dependencies/mocks
    beforeEach(() => {
      angular.mock.module('app');

      // Injections
      angular.mock.inject((
        _$state_: ng.ui.IStateService,
        _$http_: ng.IHttpService
      ) => {
        $state = _$state_;
        $http = _$http_;
      });

      homeService = new app.home.HomeService($http);

      homeController = new app.home.HomeController($state, homeService);
    });

    it('should test title', () => {
      expect(homeController.title).toEqual('Hi! I am from home controller');
    });

    it('should get items', () => {
      expect(homeController.items.length).toBe(5);
    });
  });
}
