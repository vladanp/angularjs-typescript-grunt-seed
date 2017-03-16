module app.common {
  "use strict";

  export class CustomUppercase {
    public static injection() {
      var filter = ($filter: ng.IFilterService) => {
        return (value: string) => {
          return $filter('uppercase')(value);
        };
      };

      filter.$inject = ['$filter'];

      return filter;
    }
  }
}
