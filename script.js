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
    ).innerHTML = `Não é o número ${numinput} Tente um número MENOR`;
  } else {
    contador++;
    document.getElementById(
      "resposta"
    ).innerHTML = `Não é o número ${numinput} Tente um número MAIOR`;
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
