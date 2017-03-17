namespace app.config {

  export class CompileConfiguration {

    public injection(): any[] {
      return ['$compileProvider', 'debug', CompileConfiguration];
    }

    constructor(private $compileProvider: ng.ICompileProvider, private debug: boolean) {
      $compileProvider.debugInfoEnabled(debug);

      $compileProvider.commentDirectivesEnabled(false);
      $compileProvider.cssClassDirectivesEnabled(false);
    }
  }
}
