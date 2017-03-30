namespace app.home {

  /**
   * This class represents Home Controller.
   */
  export class HomeController {

    public title: string;
    public items: DataItem[];

    /**
     * $inject annotation.
     * It provides $injector with information about dependencies to be injected into constructor.
     * The parameters must match in count and type.
     */
    public static $inject = [
      '$state',
      'HomeService'
    ];

    /**
     * Creates an instance of HomeController.
     * Dependencies are injected via AngularJS $injector.
     * @param {ng.ui.IStateService} $state - The injected $state.
     * @param {HomeService} homeService - The injected HomeService.
     * @constructor
     */
    constructor(
      private $state: ng.ui.IStateService,
      private homeService: HomeService
    ) {
      this.init();
    }

    /**
     * Set title and items on init.
     */
    private init(): void {
      this.title = 'Hi! I am from home controller';
      this.items = this.homeService.getData();
    }
  }
}
