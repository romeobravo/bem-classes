import StringOption from './StringOption'

export default class ObjectOption {
  constructor(base, option) {
    this.base = base
    this.option = option
  }

  keyToString(key) {
    return new StringOption(this.base, key).toString()
  }

  get classNames() {
    return Object.keys(this.option).reduce((names, key) => (
      this.option[key] ? names.concat(this.keyToString(key)) : names
    ), [])
  }

  toString() {
    return this.classNames.join(' ')
  }
}
