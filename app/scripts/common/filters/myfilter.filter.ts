namespace app.common {

  /**
   * This class represents Example of a typescript filter.
   */
  export class CustomUppercase {
    public static injection() {
      let filter = ($filter: ng.IFilterService) => {
        return (value: string) => {
          return $filter('uppercase')(value);
        };
      };

      filter.$inject = ['$filter'];

      return filter;
    }
  }
}
