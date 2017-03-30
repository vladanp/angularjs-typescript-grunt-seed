namespace app.configs {

  /**
   * This class represents compile configuration.
   */
  export class CompileConfiguration {

    /**
     * $inject annotation.
     * It provides $injector with information about dependencies to be injected into constructor.
     * The parameters must match in count and type.
     */
    public static $inject = [
      '$compileProvider',
      'debug'
    ];

    /**
     * Creates an instance of CompileConfiguration.
     * @param {ng.ICompileProvider} $compileProvider - The injected $compileProvider.
     * @param {boolean} debug - The injected debug.
     * @constructor
     */
    constructor(private $compileProvider: ng.ICompileProvider, private debug: boolean) {
      $compileProvider.debugInfoEnabled(debug);

      $compileProvider.commentDirectivesEnabled(false);
      $compileProvider.cssClassDirectivesEnabled(false);
    }
  }
}
