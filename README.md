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
Pass the arguments to the imported function and call `.s` to return the class string. You can pass strings or key-value pairs as arguments. The key of a key-value pair only gets added as a class if the value is truthy.
```js
classes('block').s
  // => 'block'
classes('block', 'column').s
  // => 'block column'
classes('block', { column: true }).s
  // => 'block column'
classes('block', { column: false }).s
  // => 'block'      
```

## BEM class strings
The first valid class becomes the block class.
Use `_` as a prefix for an element and `-` or `$` for a modifier.
```js
classes('block').s
  // => 'block'
classes('block', '-modifier').s
  // => 'block block--modifier'
classes('block', '$modifier').s
  // => 'block block--modifier'
classes('block', { '-modifier': true }).s
  // => 'block block--modifier'
classes('block', { $modifier: true }).s
  // => 'block block--modifier'
classes('block__element', '$modifier').s
  // => 'block__element block__element--modifier'  
```
You can extend the returned object with the `.e()` or `.element()` method. This can be useful for building a React class as a block with the elements inside.

```js
const blockClasses = classes('block', { $modifier: true })
blockClasses.s
// => 'block block--modifier'
blockClasses.e('element', { $modifier: true). }).s
// => 'block__element block__element--modifier'
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
