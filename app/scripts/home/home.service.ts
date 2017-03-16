module app.home {
  "use strict";

  export class HomeService {

    private data: DataItem[] = [];

    injection(): any[] {
      return [HomeService]
    }

    constructor() {
      for (let i = 0; i < 5; i++) {
        this.data.push({ id: i, name: "item" + i });
      }
    }

    getData(): DataItem[] {
      return this.data;
    }
  }
}
