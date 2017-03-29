namespace app.common {

  /**
   * This class represents Example of a typescript directive.
   */
  export class MyDirective implements angular.IDirective {
    public restrict = 'E';
    public templateUrl = 'templates/mydirective.html';
    public scope = {};
    public controller = MyController;
    public controllerAs = 'dir';
    public bindToController = {
      title: '@'
    };

    /**
     * Programmatically modify resulting DOM element instances, add event listeners, and set up data binding.
     * @param {ng.IScope} scope - Angular scope object.
     * @param {ng.IAugmentedJQuery} element - jqLite-wrapped element that this directive matches.
     * @param {ng.IAttributes} attrs - Object with the normalized attribute names and their corresponding values.
     */
    public link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {

    }

    /**
     * Instance of directive.
     * @return {ng.IDirective} returns instance of directive.
     */
    public static instance(): ng.IDirective {
      return new MyDirective();
    }
  }

  /**
   * This class represents Example of a typescript directive controller.
   */
  export class MyController {
    public title: string;

    public static $inject: string[] = [];

    /**
     * Creates an instance of MyController.
     * @constructor
     */
    constructor() { }

    /**
     * Change value inside directive.
     */
    public changeValue(): void {
      this.title = 'I am changed inside directive';
    }
  }
}
