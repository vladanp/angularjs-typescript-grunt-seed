module app.common {
  "use strict";

  export class MyDirective implements angular.IDirective {
    restrict = 'E';
    templateUrl = 'templates/mydirective.html';
    scope = {};
    controller = MyController;
    controllerAs = "dir";
    bindToController = {
      title: '@'
    };

    link(scope: ng.IScope, elements: ng.IAugmentedJQuery, attrs: ng.IAttributes) {

    }

    static instance(): ng.IDirective {
      return new MyDirective();
    }
  }

  export class MyController {
    public title: string;

    static $inject: string[] = [];

    constructor() { }

    changeValue(): void {
      this.title = "I am changed inside directive";
    }
  }
}
