# bem-classes
Fast and powerful classnames utility for in your javascript application.
Easy to use and fast to type interface for creating BEM classnames in your client-side applications.

```js
const block = bem('block', { $big: truthy })
// 'block block--big'
const element = block('element', {
  $modifier: truthy,
  extraClass: true
})
// 'block__element block__element--modifier extraClass'
```

# Install
```bash
npm install bem-classes
```

# Usage

## Require
You can use any variable name you like.
```js
import bem from 'bem-classes'
var bem = require('bem-classes')
```
You can also grab the bem-classes.js file from the repository.

## Standard class strings
Pass the arguments to the imported function and it returns a classes facotry.
This instance implements the toString method which will return the class string when a string is expected.
You can also call `.toString()` explicitly to return the class string.
```js
bem('block')
  // => { [Function: factory] toString: [Function] }
bem('block').toString()
  // => 'block'
`${bem('block')}`
  // => 'block'
```

You can pass strings or key-value pairs as arguments. The key of a key-value pair only gets added as a class if the value is truthy. You can add as many arguments as you like.
```js
`${bem('block', 'column')}`
  // => 'block column'
`${bem('block', { column: true })}`
  // => 'block column'
`${bem('block', { column: false })}`
  // => 'block'

`${bem('block', { column: false }, 'class1 class2 class3')}`
  // => 'block class1 class2 class3'
`${bem('block', { column: false }, 'class1', 'class2', 'class3')}`
  // => 'block class1 class2 class3'
```

## BEM class strings
The first valid class becomes the block class.
Use the prefix `-` or `$` for a modifier.
```js
`${bem('block')}`
  // => 'block'
`${bem('block', '-modifier')}`
  // => 'block block--modifier'
`${bem('block', '$modifier')}`
  // => 'block block--modifier'
`${bem('block', { '-modifier': true })}`
  // => 'block block--modifier'
`${bem('block', { $modifier: true })}`
  // => 'block block--modifier'
`${bem('block__element', '$modifier')}`
  // => 'block__element block__element--modifier'
```
You can extend the returned object by calling the block. This can be useful for building a React class as a block with the elements inside.

```js
const block = bem('block', { $modifier: true })
`${block}`
// => 'block block--modifier'
`${block('element', { $modifier: true })}`
// => 'block__element block__element--modifier'

const element = bem('block')('element')
// => 'block__element'
```

## React example
An example in react showing the power and flexibility of bem-classes
```js
import bem from 'bem-classes'

const BemExample = (props) => {
  const block = bem('block')
  const element = block('element', {
    $modifier: props.thisPropIsTruthy,
    extraClass: true
  })
  return (
    <div className={block}>
      <div className={element}>Hello World</div>
    </div>
  )
}
```

```html
<div class="block">
  <div class="block__element block__element--modifier extraClass">Hello World</div>
</div>
```

# Test
```
npm test
npm run ci
```

# Build
```
npm run build
```

# Develop (watch and rebuild)
```
npm run watch
npm test
```
