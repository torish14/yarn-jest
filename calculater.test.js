describe('calculater.js', () => {
  test.each([
    [1100, 100],
    [1000, 90],
    [55, 55],
  ])(
    'calculate_tax(): %p 円の消費税は､%p と一致すること',
    (price, expected) => {
      const actual = calculate_tax(price)
      expect(actual).toEqual(expected)
    },
  )
})
