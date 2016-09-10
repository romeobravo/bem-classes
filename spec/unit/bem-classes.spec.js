var cx = require('../../bem-classes')

describe('BEM Classes', () => {
  describe('for standard class strings', () => {
    it('returns base class', () => {
      expect(cx('block').s).toBe('block')
    })

    it('concatenates classes', () => {
      expect(cx('block', 'column').s).toBe('block column')
    })

    it('converts to string when expected', () => {
      expect(`${cx('block')}`).toBe('block')
    })
  })

  describe('with key-value objects', () => {
    it('add key as class if value truthy', () => {
      expect(cx('block', { column: true }).s).toBe('block column')
    })

    it('does not add key as class if value falsy', () => {
      expect(cx('block', { column: false }).s).toBe('block')
    })

    it('can add mulitple key-values', () => {
      expect(cx('block', { column: true, xcolumn: true }).s).toBe('block column xcolumn')
    })
  })

  describe('with modifier classes', () => {
    it('can add modifier class with - prefix', () => {
      expect(cx('block', '-modifier').s).toBe('block block--modifier')
    })

    it('can add modifier class with $ prefix', () => {
      expect(cx('block', '$modifier').s).toBe('block block--modifier')
    })

    it('can add modifier class with $ prefix in key name', () => {
      expect(cx('block', { $modifier: true }).s).toBe('block block--modifier')
    })
  })

  describe('with elements', () => {
    it('can extend base with element class', () => {
      var blockClasses = cx('block', { $modifier: true })
      expect(blockClasses.s).toBe('block block--modifier')
      var elementClasses = blockClasses.e('element', { $modifier: true })
      expect(elementClasses.s).toBe('block__element block__element--modifier')
    })
  })
})
