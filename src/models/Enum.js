export default class Enum {
  constructor (enums = {}) {
    this.enums = { ...enums }
  }

  create () {
    return Object.freeze(this.enums)
  }
}
