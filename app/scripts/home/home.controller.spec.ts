module test {
  'use strict';

  describe('Home Controller', () => {
    // Declare dependencies and common vars
    let homeController: app.home.HomeController,
      homeService: app.home.HomeService,
      $state: ng.ui.IStateService;

    // Setup dependencies/mocks
    beforeEach(() => {
      angular.mock.module('app');

      // Injections
      angular.mock.inject((
        _$state_: ng.ui.IStateService
      ) => {
        $state = _$state_;
      });

      homeService = new app.home.HomeService();

      homeController = new app.home.HomeController($state, homeService);
    });

    it('should test title', () => {
      expect(homeController.title).toEqual("Hi! I am from home controller");
    });

    it('should get items', () => {
      expect(homeController.items.length).toBe(5);
    });
  });
}
