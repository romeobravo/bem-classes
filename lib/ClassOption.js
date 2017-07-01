import ObjectOption from './ObjectOption'
import StringOption from './StringOption'

export default class ClassOption {
  constructor(base, option) {
    this.base = base
    this.option = option

    if (this.isObject) {
      return new ObjectOption(base, option)
    } else if (this.isString) {
      return new StringOption(base, option)
    }

    return ''
  }

  get isObject() {
    return this.option !== null && typeof this.option === 'object'
  }

  get isString() {
    return this.option instanceof String || typeof this.option === 'string'
  }
}
