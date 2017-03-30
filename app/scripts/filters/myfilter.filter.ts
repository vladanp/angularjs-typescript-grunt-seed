namespace app.filters {

  /**
   * This class represents Example of a typescript filter.
   */
  export class CustomUppercase {

    public static factory() {
      const filter = ($filter: ng.IFilterService) => {
        return (value: string): string => {
          return $filter('uppercase')(value);
        };
      };

      filter.$inject = [
        '$filter'
      ];

      return filter;
    }
  }
}
