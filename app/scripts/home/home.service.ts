namespace app.home {

  /**
   * This class provides the Home service with methods to get example data.
   */
  export class HomeService {

    private data: DataItem[] = [];

    /**
     * $inject annotation.
     * It provides $injector with information about dependencies to be injected into constructor.
     * The parameters must match in count and type.
     */
    public static $inject = [
      '$http'
    ];

    /**
     * Creates a new HomeService.
     * @constructor
     */
    constructor($http: ng.IHttpService) {
      for (let i = 0; i < 5; i++) {
        this.data.push({ id: i, name: 'item' + i });
      }
    }

    /**
     * Returns array of created mock data.
     * @return {DataItem[]} Array of data.
     */
    public getData(): DataItem[] {
      return this.data;
    }
  }
}
