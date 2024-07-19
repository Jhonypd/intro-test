<!-- @format -->

# Calculadora JavaScript

Bem-vindo ao repositório da nossa calculadora JavaScript! Este projeto é uma calculadora simples, mas poderosa, desenvolvida com JavaScript puro e testada com Jest. Abaixo, você encontrará todas as informações necessárias para configurar, executar e entender os testes desta aplicação.

## Índice

1. [Visão Geral](#visão-geral)
2. [Configuração do Projeto](#configuração-do-projeto)
3. [Uso](#uso)
4. [Configuração do Jest](#configuração-do-jest)
5. [Testes](#testes)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

## Visão Geral

Esta aplicação é uma calculadora com as seguintes funcionalidades:

- **Raiz Quadrada**: Calcula a raiz quadrada de um número.
- **Porcentagem**: Calcula a porcentagem de um número.
- **Potência**: Calcula a potência de um número elevado a um expoente.

Além disso, a calculadora inclui operações básicas de adição, subtração, multiplicação e divisão, bem como a funcionalidade de limpar a calculadora e alternar sinais.

## Configuração do Projeto

Para configurar e executar o projeto localmente, siga estas etapas:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/calculadora-js.git
   ```

2. **Navegue até o Diretório do Projeto**

   ```bash
   cd calculadora-js
   ```

3. **Instale as Dependências**

   ```bash
   npm install
   ```

## Uso

Para usar a calculadora, abra o arquivo `index.html` em um navegador. A interface da calculadora permitirá que você execute operações matemáticas básicas e avançadas.

## Configuração do Jest

Jest é uma biblioteca de testes para JavaScript. Para garantir que o código da calculadora esteja funcionando corretamente, usamos Jest para escrever e executar os testes.

### Instalação do Jest

Se você ainda não instalou o Jest, você pode instalá-lo globalmente com o seguinte comando:

```bash
npm install --save-dev jest
```

### Configuração do Jest

A configuração básica do Jest está incluída no `package.json`. Certifique-se de que a seguinte seção esteja presente:

```json
"scripts": {
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
}
```

Isso permite que você execute os testes usando o comando `npm test`.

## Testes

Os testes para a calculadora estão localizados no arquivo `src/index.test.js`. Abaixo estão descritos os testes que verificam as funcionalidades principais da calculadora.

### Funções Testadas

- **`calcularRaizQuadrada`**: Testa a raiz quadrada de um número, incluindo números negativos e entradas não numéricas.
- **`calcularPorcentagem`**: Testa a porcentagem de um número e lida com entradas não numéricas.
- **`calcularPotencia`**: Testa a potência de um número elevado a um expoente e lida com entradas não numéricas.
- **`adicionarDigito`**: Testa a adição de dígitos ao número atual e o tratamento do sinal de vírgula.
- **`definirOperador`**: Testa a definição do operador para operações matemáticas.
- **`calcular`**: Testa a execução de cálculos com base no operador definido.
- **`limparCalculadora`**: Testa a limpeza da calculadora e reinicialização dos valores.

### Exemplos de Testes

Aqui estão alguns exemplos de como os testes são escritos:

#### Teste da Função `calcularRaizQuadrada`

```javascript
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
```

#### Teste da Função `calcularPorcentagem`

```javascript
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
```

#### Teste da Função `calcularPotencia`

```javascript
describe("calcularPotencia", () => {
	test("deve retornar 8 para 2^3", () => {
		expect(calcularPotencia(2, 3)).toBe("8");
	});

	test("deve retornar 1 para qualquer número elevado a 0", () => {
		expect(calcularPotencia(5, 0)).toBe("1");
	});

	test("deve retornar 0 para 0^5", () => {
		expect(calcularPotencia(0, 5)).toBe("0");
	});

	test("deve retornar 1 para 1 elevado a qualquer potência", () => {
		expect(calcularPotencia(1, 100)).toBe("1");
	});

	test("deve lidar com entradas base e expoente não numéricas de forma adequada", () => {
		expect(calcularPotencia("abc", 2)).toBe(undefined);
		expect(calcularPotencia(2, "abc")).toBe(undefined);
	});
});
```

### Executando os Testes

Para executar os testes, use o comando:

```bash
npm test
```

Os testes serão executados e você verá os resultados no console.

## Contribuição

Se você deseja contribuir para este projeto, por favor, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações.
3. Faça as alterações e adicione testes, se necessário.
4. Envie um pull request com uma descrição detalhada das suas alterações.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
