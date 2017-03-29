namespace app.config {

  /**
   * This class represents compile configuration.
   */
  export class CompileConfiguration {

    public injection(): any[] {
      return ['$compileProvider', 'debug', CompileConfiguration];
    }

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
