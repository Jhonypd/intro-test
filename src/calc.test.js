/** @format */

const { division } = require("./calc");

describe("calculation functions", () => {
	test("should return 0.5", () => {
		const result = division(1, 2);

		expect(result).toBe(0.5);
	});
	test("should return infinity when divides per 0", () => {
		const result = division(1, 0);

		expect(result).toBe(Infinity);
	});
});
