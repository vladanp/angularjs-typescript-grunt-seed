module test {
  'use strict';

  describe('My directive', function () {
    let element: angular.IAugmentedJQuery,
      myController: app.common.MyController,
      $compile: angular.ICompileService,
      $rootScope: angular.IRootScopeService,
      $templateCache: ng.ITemplateCacheService;

    // Setup dependencies/mocks
    beforeEach(() => {
      angular.mock.module('app');

      // Injections
      angular.mock.inject((
        _$compile_: angular.ICompileService,
        _$rootScope_: angular.IRootScopeService,
        _$templateCache_: ng.ITemplateCacheService
      ) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_;
      });

      $templateCache.put('templates/mydirective.html', '<div>{{dir.title}}</div>');

      element = angular.element(`
        <my-directive title="test title"></my-directive>
      `);

      $compile(element)($rootScope.$new());
      $rootScope.$digest();

      myController = element.controller("myDirective");
    });

    it('should be compiled', function () {
      expect(element.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function () {
      expect(myController).not.toBeNull();
      expect(myController.title).toBe("test title");
    });

    it('should change value', function () {
      myController.changeValue();

      expect(myController.title).toBe("I am changed inside directive");
    });
  });
}
