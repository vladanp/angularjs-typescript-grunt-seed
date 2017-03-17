namespace test {

  describe('Home Service', () => {
    // Declare dependencies and common vars
    let homeService: app.home.HomeService;

    // Setup dependencies/mocks
    beforeEach(() => {
      // Main module
      angular.mock.module('app');

      // Injections
      angular.mock.inject((

      ) => {

      });

      homeService = new app.home.HomeService();
    });

    it('should test data', () => {
      expect(homeService.getData().length).toBe(5);
    });
  });
}
