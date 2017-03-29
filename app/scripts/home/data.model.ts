namespace app.home {

  /**
   * This class represents example model for data sample.
   */
  export class DataItem {
    /**
     * Creates an instance of DataItem.
     * @param {number} id - ID property of data item.
     * @param {string} name - Name property of data item.
     * @constructor
     */
    constructor(
      public id: number,
      public name: string
    ) { }
  }
}
