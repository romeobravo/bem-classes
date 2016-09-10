# bem-classes
Easy (BEM) classes for in your javascript application.

# Install
```bash
npm install bem-classes
```

# Usage

## Require
You can use any variable name you like.
```js
var classes = require('bem-classes')
import classes from 'bem-classes'
```
You can also grab the bem-classes.js file from the repository.

## Standard class strings
Pass the arguments to the imported function and it returns a BemClasses instance.
This instance implements the toString method which will return the class string when a string is expected.
You can also call `.s` or `.string` explicitly to return the class string.
```js
classes('block')
  // => BemClasses { classes: [ 'block' ] }
classes('block').string
  // => 'block'
`${classes('block')}`
  // => 'block'
```

You can pass strings or key-value pairs as arguments. The key of a key-value pair only gets added as a class if the value is truthy.
```js
`${classes('block', 'column')}`
  // => 'block column'
`${classes('block', { column: true })}`
  // => 'block column'
`${classes('block', { column: false })}`
  // => 'block'      
```

## BEM class strings
The first valid class becomes the block class.
Use `_` as a prefix for an element and `-` or `$` for a modifier.
```js
`${classes('block')}`
  // => 'block'
`${classes('block', '-modifier')}`
  // => 'block block--modifier'
`${classes('block', '$modifier')}`
  // => 'block block--modifier'
`${classes('block', { '-modifier': true })}`
  // => 'block block--modifier'
`${classes('block', { $modifier: true })}`
  // => 'block block--modifier'
`${classes('block__element', '$modifier')}`
  // => 'block__element block__element--modifier'  
```
You can extend the returned object with the `.e()` or `.element()` method. This can be useful for building a React class as a block with the elements inside.

```js
const blockClasses = classes('block', { $modifier: true })
`${blockClasses}`
// => 'block block--modifier'
`${blockClasses.e('element', { $modifier: true })}`
// => 'block__element block__element--modifier'
```

## React example
An example in react showing the power and flexibility of bem-classes
```js
import cx from 'bem-classes'

const BemExample = (props) => {
  const block = cx('block')
  const element = block.e('element', {
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
```

# Build
```
npm run build
```

# Develop (watch and rebuild)
```
npm run watch
```
