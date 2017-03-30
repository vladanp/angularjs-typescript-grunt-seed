namespace test {

  describe('Home Service', () => {
    // Declare dependencies and common vars
    let homeService: app.home.HomeService,
      $http: ng.IHttpService;

    // Setup dependencies/mocks
    beforeEach(() => {
      // Main module
      angular.mock.module('app');

      // Injections
      angular.mock.inject((
        _$http_: ng.IHttpService
      ) => {
        $http = _$http_;
      });

      homeService = new app.home.HomeService($http);
    });

    it('should test data', () => {
      expect(homeService.getData().length).toBe(5);
    });
  });
}
