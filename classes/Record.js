export default class Record {
  constructor(id) {
    this.id = id;
    this.weekly = Array(5).fill("");
    this.monthly = Array(4).fill("");
  }
}
