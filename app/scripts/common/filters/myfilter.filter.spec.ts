module test {
  'use strict';

  describe('My filter', function () {
    let $filter: ng.IFilterService;

    // Setup dependencies/mocks
    beforeEach(() => {
      angular.mock.module('app');

      // Injections
      angular.mock.inject((
        _$filter_: any
      ) => {
        $filter = _$filter_;
      });
    });

    it('should convert to uppercase', function () {
      var uppercaseText = $filter<Function>('customUppercase')('test');

      expect(uppercaseText).toEqual("TEST");
    });
  });
}
