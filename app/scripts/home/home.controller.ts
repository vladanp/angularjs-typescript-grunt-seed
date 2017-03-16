module app.home {
  "use strict";

  export class HomeController {

    injection(): any[] {
      return ['$state', 'HomeService', HomeController];
    }

    public title: string;
    public items: DataItem[];

    constructor(
      private $state: ng.ui.IStateService,
      private homeService: HomeService
    ) {
      this.init();
    }

    init(): void {
      this.title = "Hi! I am from home controller";
      this.items = this.homeService.getData();
    }
  }
}
