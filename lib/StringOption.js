export default class StringOption {
  constructor(base, option) {
    this.base = base
    this.option = option
  }

  hasPrefix(character) {
    return this.option.indexOf(character) === 0
  }

  withoutPrefix() {
    return this.option.substring(1)
  }

  get isModifier() {
    return this.hasPrefix('$') || this.hasPrefix('-')
  }

  toModifier() {
    return `${this.base}--${this.withoutPrefix()}`
  }

  toString() {
    return this.isModifier ? this.toModifier() : this.option
  }
}
