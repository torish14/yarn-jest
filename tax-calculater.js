class TaxCalculater {
	private tax_rate = 10 / 100

	/**
	 * 適切な価格かどうかを判定する
	*/
	isValidPrice(price) {
		if(typeof price != 'number') {
			return false
		}
		if(price <= 0) {
			return false
		}
		return true
	}

	/**
	 * 本体価格を算出する
	*/
	calculateBasePrice(price) {
		if(!this.isValidPrice(price)) {
			return null
		}
		const base_price_raw = (price * 100) / (100 + this.tax_rate)

		switch(this.decimal_point_operator) {
			case 'round':
				return Math.round(base_price_raw)
			case 'ceil':
				return Math.ceil(base_price_raw)
			default:
				return Math.floor(base_price_raw)
		}
	}

	/**
	 * 消費税を計算する
	*/
	calculateTax(price) {
		const base_price = this.calculateBasePrice(price)
		if(!base_price) {
			return null
		}
		return price - base_price
	}
}

module.exports = TaxCalculater
