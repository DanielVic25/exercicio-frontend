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
const inputMaiuscula = document.getElementById("inputMaiuscula");
const resultadoMaiuscula = document.getElementById("resultadoMaiuscula");



