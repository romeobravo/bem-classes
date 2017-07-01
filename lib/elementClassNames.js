import ClassNamesDeriver from './ClassNamesDeriver'

export default function elementClassNames(block, element, ...args) {
  const factory = (...elementArgs) => (
    elementClassNames(block, element, ...(args.concat(elementArgs)))
  )

  factory.toString = () => (
    new ClassNamesDeriver(block, element, ...args).toString()
  )

  return factory
}
