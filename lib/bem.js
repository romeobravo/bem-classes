import ClassNamesDeriver from './ClassNamesDeriver'
import elementClassNames from './elementClassNames'

function bem(block, ...args) {
  const factory = (element, ...elementArgs) => (
    elementClassNames(block, element, ...elementArgs)
  )

  factory.toString = () => (
    new ClassNamesDeriver(block, false, ...args).toString()
  )

  return factory
}

module.exports = bem
export default bem
