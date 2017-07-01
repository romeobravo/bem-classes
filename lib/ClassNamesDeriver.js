import ClassOption from './ClassOption'

export default class ClassNamesDeriver {
  constructor(block, element, ...args) {
    this.block = block
    this.element = element
    this.options = args
  }

  get base() {
    const { block, element } = this
    return element ? `${block}__${element}` : block
  }

  get names() {
    const { options, block } = this
    return options.
      map(option => (new ClassOption(this.base, option).toString())).
      filter(string => string.length)
  }

  get classes() {
    const { base, names } = this
    return names.length ? [base].concat(names) : [base]
  }

  toString() {
    return this.classes.join(' ')
  }
}
