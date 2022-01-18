const calculate_tax = (price) => {
  const tax_rate = 10 / 100
  const exclude_price = Math.ceil(price / (1 + tax_rate))
  return price - exclude_price
}

module.exports = calculate_tax
