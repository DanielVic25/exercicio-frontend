// Exercício 01 - Alterando a cor para azul uzando querySelectorAll. 
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {
  paragrafo.style.color = "blue";
});


// Exercício 02 - Coloar um botão que fala horas são atualmente e ao clicar mostra um alert com as horas.
const botaoHoras = document.getElementById("botaoHoras");
const resultadoHoras = document.getElementById("resultadoHoras");

botaoHoras.addEventListener("click", () => {
  const dataAtual = new Date();
  resultadoHoras.textContent = "São atualmente " + dataAtual.toLocaleTimeString();

});

// Exercício 03 - Criar um input para mostrar o texto digitado em tempo real.
const inputTexto = document.getElementById("inputTexto");
const resultadoTexto = document.getElementById("resultadoTexto");

inputTexto.addEventListener("input", () => {
  resultadoTexto.textContent = inputTexto.value;


});

// Exercício 04 - Criar função para mostrar a letra em maiúscula utilizanodo Arrow function.
const inputMaiuscula = document.getElementById("inputSaudacao");
const resultadoMaiuscula = document.getElementById("resultadoSaudacao");

const saudar = (nome) => {
  return "Olá, " + nome.toUpperCase() + "!";
};

inputSaudacao.addEventListener("input", () => {
  resultadoSaudacao.textContent = saudar(inputSaudacao.value);
});

// Exercício 05 - Lista de frutas em CSV.
const botaoFrutas = document.getElementById("botaoFrutas");
const resultadoFrutas = document.getElementById("resultadoFrutas");

botaoFrutas.addEventListener("click", () => {
  const frutas = ["maçã", "banana", "uva"];

  resultadoFrutas.textContent = frutas.join(", ");
});


// Exercício 06 - Mini calculadora de 4 operações.
const inputNumero1 = document.getElementById("inputNumero1");
const inputNumero2 = document.getElementById("inputNumero2");
const botaoCalculadora = document.getElementById("botaoCalculadora");
const resultadoCalculadora = document.getElementById("resultadoCalculadora");

botaoCalculadora.addEventListener("click", () => {

  const numero1 = Number(inputNumero1.value);
  const numero2 = Number(inputNumero2.value);
  const operacao = prompt("Digite a operação (+, -, *, /)");

  let resultado = "";

  if (operacao === "+") {
    resultado = numero1 + numero2;

  } else if (operacao === "-") {
    resultado = numero1 - numero2;

  } else if (operacao === "*") {
    resultado = numero1 * numero2;

  } else if (operacao === "/") {

    if (numero2 === 0) {
      resultado = "Não é possível dividir por zero";

    } else {
      resultado = numero1 / numero2;
    }

  } else {
    resultado = "Operação inválida";
  }

  resultadoCalculadora.textContent = "Resultado: " + resultado;

});


// Exercício 07 - Soma de dois inputs.
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botaoSomar = document.getElementById("botaoSomar");
const resultadoSoma = document.getElementById("resultadoSoma");

botaoSomar.addEventListener("click", () => {

  if (numero1.value === "" || numero2.value === "") {

    resultadoSoma.textContent = "Preencha os dois campos";

  } else {

    const soma = parseFloat(numero1.value) + parseFloat(numero2.value);

    resultadoSoma.textContent = "Resultado: " + soma;
  }

});


// Exercício 08 - Arrow function maior número.
const botaoMaior = document.getElementById("botaoMaior");
const resultadoMaior = document.getElementById("resultadoMaior");

const maior = (a, b) => a > b ? a : b;

botaoMaior.addEventListener("click", () => {

  const numeroA = Number(prompt("Digite o primeiro número"));
  const numeroB = Number(prompt("Digite o segundo número"));

  resultadoMaior.textContent = "Maior número: " + maior(numeroA, numeroB);

});


// Exercício 09 - Formulário com preventDefault.
const formulario = document.getElementById("formulario");
const resultadoFormulario = document.getElementById("resultadoFormulario");

formulario.addEventListener("submit", (event) => {

  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  console.log({
    nome,
    email
  });

  resultadoFormulario.textContent = "Formulário enviado com sucesso";

});


// Exercício 10 - Calculadora de Horas e Cursos.
const horasCurso = document.getElementById("horasCurso");
const valorHora = document.getElementById("valorHora");
const numeroCursos = document.getElementById("numeroCursos");
const botaoCurso = document.getElementById("botaoCurso");
const resultadoCurso = document.getElementById("resultadoCurso");

botaoCurso.addEventListener("click", () => {

  const horas = Number(horasCurso.value);
  const valor = Number(valorHora.value);
  const cursos = Number(numeroCursos.value);

  if (
    horasCurso.value === "" ||
    valorHora.value === "" ||
    numeroCursos.value === ""
  ) {

    resultadoCurso.textContent = "Preencha todos os campos";

  } else {

    const total = horas * valor * cursos;

    resultadoCurso.textContent =
      "Valor total: R$ " + total.toFixed(2);

  }

});


