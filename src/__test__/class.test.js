const TaxCalculater = require('../tax-calculater')

describe('class TaxCalculater()', () => {
  // describe() の内側で class を初期化する
  const tax_calculater = new TaxCalculater()

  test.each([
    [110, true],
    [100, true],
    [-100, false],
    [null, false],
  ])('isValidPrice(): %p は､%p と一致すること', (price, expected) => {
    const actual = tax_calculater.isValidPrice(price)
    expect(actual).toBe(expected)
  })

  test.each([
    [110, 10],
    [100, ['round', 'ceil'].includes(operator) ? 9 : 10],
    [-100, null],
    [null, null],
  ])(
    'calculateTax(): %p 円の消費税額が､%p と一致すること',
    (price, expected) => {
      const actual = tax_calculater.calculateTax(price)
      expect(actual).toBe(expected)
    },
  )
})
