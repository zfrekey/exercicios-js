/*Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).
O menu deve permitir escolher entre as seguintes opções:
1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).
2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.
3 - “Sair”: Encerra o programa.
O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal. */

let fila = []; 

function exibirFila() {
  if (fila.length === 0) {
    return "Fila vazia.\n";
  } else {
    let resultado = "";
    for (let i = 0; i < fila.length; i++) {
      resultado += (i + 1) + "º " + fila[i] + "\n";
    }
    return resultado;
  }
}

let opcao = "";

while (opcao !== "3") {
  const filaAtual = exibirFila();
  opcao = prompt(
    "Lista de Clientes:\n" +
      filaAtual +
      "\nEscolha uma opção:\n" +
      "1 - Novo Cliente\n" +
      "2 - Atender Cliente\n" +
      "3 - Sair\n"
  );

  switch (opcao) {
    case "1":
      const novoCliente = prompt("Digite o nome do novo cliente:");
      if (novoCliente.trim() !== "") {
        fila.push(novoCliente);
        alert("Cliente " + novoCliente + " adicionado à fila!");
      } else {
        alert("Nome inválido. Tente novamente.");
      }
      break;

    case "2":
      if (fila.length > 0) {
        const clienteAtendido = fila.shift();
        alert("Cliente sendo atendido: " + clienteAtendido);
      } else {
        alert("Nenhum cliente na fila para atender.");
      }
      break;

    case "3":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
}

