namespace app.home {

  export class HomeService {

    private data: DataItem[] = [];

    public injection(): any[] {
      return [HomeService];
    }

    constructor() {
      for (let i = 0; i < 5; i++) {
        this.data.push({ id: i, name: 'item' + i });
      }
    }

    public getData(): DataItem[] {
      return this.data;
    }
  }
}
