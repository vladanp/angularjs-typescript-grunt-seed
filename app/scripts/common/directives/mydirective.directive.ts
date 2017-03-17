namespace app.common {

  export class MyDirective implements angular.IDirective {
    public restrict = 'E';
    public templateUrl = 'templates/mydirective.html';
    public scope = {};
    public controller = MyController;
    public controllerAs = 'dir';
    public bindToController = {
      title: '@'
    };

    public link(scope: ng.IScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

    }

    public static instance(): ng.IDirective {
      return new MyDirective();
    }
  }

  export class MyController {
    public title: string;

    public static $inject: string[] = [];

    constructor() { }

    public changeValue(): void {
      this.title = 'I am changed inside directive';
    }
  }
}
