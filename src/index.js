/** @format */

export let numeroAtual = "";
export let primeiroOperando = null;
export let operador = null;
export let reiniciar = false;

export const atualizarResultado = (originClear = false) => {
	const resultado = document.querySelector(".result");
	resultado.innerText = originClear ? 0 : numeroAtual.replace(".", ",");
};

export const adicionarDigito = (digito) => {
	if (digito === "," && (numeroAtual.includes(",") || !numeroAtual)) return;
	if (reiniciar) {
		numeroAtual = digito;
		reiniciar = false;
	} else {
		numeroAtual += digito;
	}
	atualizarResultado();
};

export const definirOperador = (novoOperador) => {
	if (numeroAtual) {
		primeiroOperando = parseFloat(numeroAtual.replace(",", "."));
		numeroAtual = "";
	}
	operador = novoOperador;
};

export const calcular = () => {
	if (operador === null || primeiroOperando === null) return;
	let segundoOperando = parseFloat(numeroAtual.replace(",", "."));
	let valorResultado;

	switch (operador) {
		case "+":
			valorResultado = primeiroOperando + segundoOperando;
			break;
		case "-":
			valorResultado = primeiroOperando - segundoOperando;
			break;
		case "x":
			valorResultado = primeiroOperando * segundoOperando;
			break;
		case "÷":
			valorResultado = primeiroOperando / segundoOperando;
			break;
		default:
			return;
	}

	if (valorResultado.toString().split(".")[1]?.length > 5) {
		numeroAtual = parseFloat(valorResultado.toFixed(5)).toString();
	} else {
		numeroAtual = valorResultado.toString();
	}

	operador = null;
	primeiroOperando = null;
	reiniciar = true;
	atualizarResultado();
};

export const limparCalculadora = () => {
	numeroAtual = "";
	primeiroOperando = null;
	operador = null;
	atualizarResultado(true);
};

export const calcularRaizQuadrada = (numero) => {
	if (typeof numero !== "number" || isNaN(numero)) {
		return undefined; // Para entradas não numéricas
	}
	if (numero < 0) {
		return "Error"; // Para números negativos
	}
	return Math.sqrt(numero)
		.toFixed(5)
		.replace(/\.?0+$/, ""); // Para números válidos
};

export const calcularPorcentagem = (numero) => {
	if (typeof numero !== "number" || isNaN(numero)) return undefined;
	return (numero / 100).toString();
};

export const calcularPotencia = (base, expoente) => {
	if (
		typeof base !== "number" ||
		isNaN(base) ||
		typeof expoente !== "number" ||
		isNaN(expoente)
	)
		return undefined;
	return Math.pow(base, expoente).toString();
};

document.addEventListener("DOMContentLoaded", () => {
	const botoes = document.querySelectorAll(".buttons button");

	botoes.forEach((botao) => {
		botao.addEventListener("click", () => {
			const textoBotao = botao.innerText;
			if (/^[0-9,]+$/.test(textoBotao)) {
				adicionarDigito(textoBotao);
			} else if (["+", "-", "x", "÷"].includes(textoBotao)) {
				definirOperador(textoBotao);
			} else if (textoBotao === "=") {
				calcular();
			} else if (textoBotao === "C") {
				limparCalculadora();
			} else if (textoBotao === "±") {
				numeroAtual = (
					parseFloat(numeroAtual || primeiroOperando) * -1
				).toString();
				atualizarResultado();
			} else if (textoBotao === "√") {
				const numero = parseFloat(numeroAtual.replace(",", "."));
				const resultado = calcularRaizQuadrada(numero);
				numeroAtual = resultado !== undefined ? resultado : "Error";
				atualizarResultado();
			} else if (textoBotao === "%") {
				const numero = parseFloat(numeroAtual.replace(",", "."));
				const resultado = calcularPorcentagem(numero);
				numeroAtual = resultado !== undefined ? resultado : "Error";
				atualizarResultado();
			} else if (textoBotao === "^") {
				const expoente = parseFloat(prompt("Digite o expoente:"));
				if (!isNaN(expoente)) {
					const base = parseFloat(numeroAtual.replace(",", "."));
					const resultado = calcularPotencia(base, expoente);
					numeroAtual = resultado !== undefined ? resultado : "Error";
					atualizarResultado();
				}
			}
		});
	});
});
