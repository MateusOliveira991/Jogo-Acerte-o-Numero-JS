let num = gerarNumero();
let numinput;
let contador = 1;
let mensagem = document.querySelector("h1");
mensagem.textContent = "Acerte o número de 0 a 100";

function conferir() {
  numinput = document.querySelector("#chute").value;

  if (numinput == num) {
    document.getElementById(
      "resposta"
    ).innerHTML = `Você acertou com ${contador} tentativas`;
  } else if (numinput > num) {
    contador++;

    document.getElementById(
      "resposta"
    ).innerHTML = `O número ${numinput} é maior que o número secreto`;
  } else {
    contador++;
    document.getElementById(
      "resposta"
    ).innerHTML = `O número ${numinput} é menor que o número secreto`;
  }
  excluirCampo();
}

function gerarNumero() {
  return parseInt(Math.random() * 100 + 1);
}

function novoJogo() {
  num = gerarNumero();
  contador = 1;
  excluirCampo();

  document.getElementById("resposta").innerHTML = ``;
}

function excluirCampo() {
  numinput = document.querySelector("#chute");
  numinput.value = "";
}
