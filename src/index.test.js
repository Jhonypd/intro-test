/** @format */

import {
	calcularRaizQuadrada,
	calcularPorcentagem,
	calcularPotencia,
} from "./index";

describe("calcularRaizQuadrada", () => {
	test('deve retornar "Error" para números negativos', () => {
		expect(calcularRaizQuadrada(-25)).toBe("Error");
	});

	test("deve retornar 5 para a raiz quadrada de 25", () => {
		expect(calcularRaizQuadrada(25)).toBe("5");
	});

	test("deve retornar 0 para a raiz quadrada de 0", () => {
		expect(calcularRaizQuadrada(0)).toBe("0");
	});

	test("deve retornar um número com 5 casas decimais para números grandes", () => {
		expect(calcularRaizQuadrada(2)).toBe("1.41421");
	});

	test("deve lidar com entradas não numéricas de forma adequada", () => {
		expect(calcularRaizQuadrada("abc")).toBe(undefined);
	});
});

describe("calcularPorcentagem", () => {
	test("deve retornar 0.25 para 25%", () => {
		expect(calcularPorcentagem(25)).toBe("0.25");
	});

	test("deve retornar 1 para 100%", () => {
		expect(calcularPorcentagem(100)).toBe("1");
	});

	test("deve retornar 0 para 0%", () => {
		expect(calcularPorcentagem(0)).toBe("0");
	});

	test("deve retornar 10 para 1000% de 1", () => {
		expect(calcularPorcentagem(1000)).toBe("10");
	});

	test("deve lidar com entradas não numéricas de forma adequada", () => {
		expect(calcularPorcentagem("abc")).toBe(undefined);
	});
});

describe("calcularPotencia", () => {
	test("deve retornar 8 para 2^3", () => {
		expect(calcularPotencia(2, 3)).toBe("8");
	});

	test("deve retornar 1 para qualquer número elevado a 0", () => {
		expect(calcularPotencia(5, 0)).toBe("1");
		expect(calcularPotencia(100, 0)).toBe("1");
	});

	test("deve retornar 0 para 0^5", () => {
		expect(calcularPotencia(0, 5)).toBe("0");
	});

	test("deve retornar 1 para 1 elevado a qualquer potência", () => {
		expect(calcularPotencia(1, 10)).toBe("1");
		expect(calcularPotencia(1, 100)).toBe("1");
	});

	test("deve lidar com entradas base e expoente não numéricas de forma adequada", () => {
		expect(calcularPotencia("abc", 2)).toBe(undefined);
		expect(calcularPotencia(2, "abc")).toBe(undefined);
	});
});
