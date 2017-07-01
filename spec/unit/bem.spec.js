var bem = require('../../bem')

describe('BEM Classes', () => {
  describe('for standard class strings', () => {
    it('returns base class', () => {
      expect(bem('block').toString()).toBe('block')
    })

    it('concatenates classes', () => {
      expect(bem('block', 'column').toString()).toBe('block column')
    })

    it('converts to string when expected', () => {
      expect(`${bem('block')}`).toBe('block')
    })
  })

  describe('with key-value objects', () => {
    it('add key as class if value truthy', () => {
      expect(bem('block', { column: true }).toString()).toBe('block column')
    })

    it('does not add key as class if value falsy', () => {
      expect(bem('block', { column: false }).toString()).toBe('block')
    })

    it('can add mulitple key-values', () => {
      expect(bem('block', { column: true, xcolumn: true }).toString()).toBe('block column xcolumn')
    })
  })

  describe('with modifier classes', () => {
    it('can add modifier class with - prefix', () => {
      expect(bem('block', '-modifier').toString()).toBe('block block--modifier')
    })

    it('can add modifier class with $ prefix', () => {
      expect(bem('block', '$modifier').toString()).toBe('block block--modifier')
    })

    it('can add modifier class with $ prefix in key name', () => {
      expect(bem('block', { $modifier: true }).toString()).toBe('block block--modifier')
    })

  })

  describe('with elements', () => {
    it('can extend base with element class', () => {
      var block = bem('block', { $modifier: true })
      expect(block.toString()).toBe('block block--modifier')
      var element = block('element', { $modifier: true })
      expect(element.toString()).toBe('block__element block__element--modifier')
    })

    it('can extend base and add more classes', () => {
      var block = bem('block')
      var element = block('element', {
        $modifier: true,
        extraClass: true
      })
      expect(`${block}`).toBe('block')
      expect(`${element}`).toBe('block__element block__element--modifier extraClass')
    })

    it('can directly call function on function to create element', () => {
      var truthy = 1
      var falsey = 0
      var element = bem('block')('element', { $modifier: truthy, $small: falsey }, 'extraClass')

      expect(`${element}`).toBe('block__element block__element--modifier extraClass')
    })
  })
})
