function isBemModifier(name) {
  return (name.indexOf('$') == 0 || name.indexOf('-') == 0)
}

function isBemElement(name) {
  return (name.indexOf('_') == 0)
}

function withoutPrefix(name) {
  return name.substring(1)
}

function toBemElement(base, string) {
  return `${base}__${string}`
}

function toBemModifier(base, string) {
  return `${base}--${string}`
}

function classFromString(base, string) {
  if (isBemElement(string)) {
    return toBemElement(base, withoutPrefix(string))
  } else if (isBemModifier(string)) {
    return toBemModifier(base, withoutPrefix(string))
  } else {
    return string
  }
}

function classFromObject(base, object) {
  let classes = []
  for(let key of Object.keys(object)) {
    if (object[key]) {
      classes.push(classFromString(base, key))
    }
  }
  return classes
}

class BemClasses {
  constructor(...args) {
    this.classes = []
    // this.base = args[0]
    // this.classes.push(this.base)

    for(var i = 0; i < args.length; i++) {
      if (typeof(args[i]) == 'object') {
        this.classes.push(...classFromObject(this.base, args[i]))
      } else if (typeof(args[i] == 'string')) {
        this.classes.push(classFromString(this.base, args[i]))
      }
    }
  }

  get base() {
    return this.classes[0] || ''
  }

  get s() {
    return this.classes.join(' ')
  }

  [Symbol.iterator]() {
    return this.classes
  }

  elem(...args) {
    const element = toBemElement(this.base, args.shift())
    return new BemClasses(element, ...args)
  }

}

function createInstance(...args) {
  return new BemClasses(...args)
}

module.exports = createInstance
export default createInstance
