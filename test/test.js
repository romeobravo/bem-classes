var classes = require('../bem-classes')

function error() {
  console.log('error')
}

if (classes('block').s != 'block') error()
if (classes('block', 'column').s != 'block column') error()
if (classes('block', { column: true }).s != 'block column') error()
if (classes('block', { column: false }).s != 'block') error()

if (classes('block', '-modifier').s != 'block block--modifier') error()
if (classes('block', '$modifier').s != 'block block--modifier') error()
if (classes('block', { '-modifier': true }).s != 'block block--modifier') error()
if (classes('block', { $modifier: true }).s != 'block block--modifier') error()
if (classes('block__element', '$modifier').s != 'block__element block__element--modifier') error()

var blockClasses = classes('block', { $modifier: true })
if (blockClasses.s != 'block block--modifier') error()
if (blockClasses.elem('element', { $modifier: true }).s != 'block__element block__element--modifier') error()
