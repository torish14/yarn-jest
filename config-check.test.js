// describe は､テストをまとめたブロックを作成するためのもの
describe('Jest 設定チェック', () => {
	// test は､テストを実行するためのもの
	// test(name, fn, timeout?) のように書く
	test('Jest 設定が正しい', () => {
		// expect(a).toBe(b) のように書く
		expect(1 + 2).toBe(3)
	})
})
