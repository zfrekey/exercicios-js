/*Você está desenvolvendo um sistema para gerenciar jogadores de um
time de esportes. Cada jogador deve ter as seguintes propriedades:
● Nome (string)
● Idade (número)
● Posição (string)
● Pontuação (número)
Implemente as seguintes funcionalidades:
1. Crie um array vazio chamado time para armazenar os jogadores
cadastrados.
2. Escreva uma função chamada adicionarJogador que:
○ Recebe como parâmetros os dados de um jogador (nome,
idade, posição e pontuação). Observação: esses dados
devem ser inseridos pelo usuário.
○ Cria um objeto representando o jogador e o adiciona ao
array time.

3. Escreva uma função chamada buscarPorPosicao que:
○ Recebe como parâmetro uma string representando a
posição. Observação: esse dado deve ser inserido pelo
usuário.

○ Retorna todos os jogadores dessa posição. Se não houver
jogadores, exiba uma mensagem apropriada.
4. Escreva uma função chamada listarTime que:
○ Imprime todos os jogadores cadastrados no time no
console, um por linha.

5. Escreva uma função chamada calcularPontuacaoMedia que:
○ Calcula e retorna a pontuação média de todos os jogadores
do time.

6. O programa deve iniciar exibindo o seguinte menu interativo, que
deve permitir ao usuário escolher uma das opções:
1 - Adicionar jogador
2 - Buscar por posição
3 - Listar time
4 - Calcular pontuação média
5 - Sair
O programa só deve ser encerrado ao escolher a opção 5. Caso
contrário, ele deve retornar ao menu interativo. */


let time = [];


function adicionarJogador() {
  const nome = prompt("Digite o nome do jogador:");
  const idade = Number(prompt("Digite a idade do jogador:"));
  const posicao = prompt("Digite a posição do jogador:");
  const pontuacao = Number(prompt("Digite a pontuação do jogador:"));

  
  const jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao
  };

 
  time.push(jogador);
  alert(`Jogador "${nome}" adicionado ao time!`);
}


function buscarPorPosicao() {
  const posicaoDesejada = prompt("Digite a posição que deseja buscar:");
  const encontrados = time.filter((jogador) => jogador.posicao === posicaoDesejada);

  if (encontrados.length === 0) {
    alert(`Nenhum jogador encontrado para a posição: ${posicaoDesejada}`);
  } else {
    let mensagem = `Jogadores na posição "${posicaoDesejada}":\n`;
    encontrados.forEach((jogador, index) => {
      mensagem += `${index + 1}. ${jogador.nome} (Idade: ${jogador.idade}, Pontuação: ${jogador.pontuacao})\n`;
    });
    alert(mensagem);
  }
}


function listarTime() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado no time.");
    alert("Nenhum jogador cadastrado no time.");
    return;
  }

  console.log("Lista de jogadores no time:");
  time.forEach((jogador, index) => {
    console.log(
      `${index + 1}. Nome: ${jogador.nome}, Idade: ${jogador.idade}, ` + 
      `Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`
    );
  });

}


function calcularPontuacaoMedia() {
  if (time.length === 0) {
    alert("Não há jogadores no time. A média é 0.");
    return;
  }

  let soma = 0;
  for (const jogador of time) {
    soma += jogador.pontuacao;
  }
  const media = soma / time.length;
  alert(`A pontuação média do time é: ${media}`);
}


function exibirMenu() {
  let opcao = "";

  while (opcao !== "5") {
    opcao = prompt(
      "Menu de Opções:\n" +
      "1 - Adicionar jogador\n" +
      "2 - Buscar por posição\n" +
      "3 - Listar time\n" +
      "4 - Calcular pontuação média\n" +
      "5 - Sair\n\n" +
      "Digite o número da opção desejada:"
    );

    switch (opcao) {
      case "1":
        adicionarJogador();
        break;
      case "2":
        buscarPorPosicao();
        break;
      case "3":
        listarTime();
        break;
      case "4":
        calcularPontuacaoMedia();
        break;
      case "5":
        alert("Encerrando o programa.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

exibirMenu();
