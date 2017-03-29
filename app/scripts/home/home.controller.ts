namespace app.home {

  /**
   * This class represents Home Controller.
   */
  export class HomeController {

    public injection(): any[] {
      return ['$state', 'HomeService', HomeController];
    }

    public title: string;
    public items: DataItem[];

    /**
     * Creates an instance of HomeController.
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
