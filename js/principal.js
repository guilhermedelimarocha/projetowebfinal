var botaoAdicionar = document.querySelector("#adicionar-paciente"); // botão que utiliza a variavel para salvar
botaoAdicionar.addEventListener("click", function () { // Faz a leitura do botão apartir de um click do usuario
  event.preventDefault();
  var form = document.querySelector("#form-adiciona"); // Seleciona o formulário que possui os dados

  var paciente = obtemPacienteDoFormulario(form); // Obtem o paciente pelo Formulário

  var erros = validaPaciente(paciente); // verifica se possui erros
  console.log(erros);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros); // exibe o erro se for maior que 0
    return;
  }
  adicionaPacienteNaTabela(paciente); // completa e adiciona o paciente na tabela
  form.reset(); // limpa o formulário

  var mensagensErro = document.querySelector("#mensagens-erro"); // busca o id para adicionar a mensagem de erro
  mensagensErro.innerHTML = ""; // adiciona na tela o erro
});

function obtemPacienteDoFormulario(form) { // Função que captura os dados do paciente
  var paciente = {
    nome: form.nome.value, // pega do formulário o nome do paciente
    peso: form.peso.value, // pega do formulário o peso do paciente
    altura: form.altura.value,// pega do formulário o altura do paciente
    gordura: form.gordura.value, // pega do formulário o gordura do paciente
    imc: calculaImc(form.peso.value, form.altura.value), // faz o calculo do imc com a função do arquivo calcula-imc.js
  };
  return paciente; // retorna os dados do paciente acima
}

function montaTr(paciente) { // função para montar linha da tabela
  var pacienteTr = document.createElement("tr"); // cria as linha da tabela

  pacienteTr.classList.add("paciente"); // coloca uma classe a linha

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // monta a coluna conforme os dados passados para a função abaixo.
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));// monta a coluna conforme os dados passados para a função abaixo.
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));// monta a coluna conforme os dados passados para a função abaixo.
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));// monta a coluna conforme os dados passados para a função abaixo.
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));// monta a coluna conforme os dados passados para a função abaixo.
console.log(pacienteTr + "linhas");
  return pacienteTr; // retorna as linhas
}

function montaTd(dado, classe) { // monta as colunas 
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td; // retorna as colunas
}

function validaPaciente(paciente) { // verifica os dados do paciente antes de enviar
  var erros = [];

  if (paciente.nome.length == 0) { // se estiver com campo correspondente no formulário vazio
    erros.push("O campo nome não pode estar em branco");
  }

  if (paciente.gordura.length == 0) { // se estiver com campo correspondente no formulário vazio
    erros.push("O campo gordura não pode estar em branco");
  }

  if (paciente.peso.length == 0) { // se estiver com campo correspondente no formulário vazio
    erros.push("O campo peso não pode estar em branco");
  }

  if (paciente.altura.length == 0) { // se estiver com campo correspondente no formulário vazio
    erros.push("O campo altura não pode estar em branco");
  }

  if (!validaPeso(paciente.peso)) { // verifica a função e verifica se o peso está certo
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) { // verifica a função e verifica se o peso está certo
    erros.push("Altura é inválida");
  }

  return erros; // retorna os erros a a tela
}

function exibeMensagensDeErro(erros) { // exibe a mensagem de erro 
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li"); // cria o conteudo "Lista" para mostrar em tela
    li.textContent = erro; 
    ul.appendChild(li);
  });
}

function adicionaPacienteNaTabela(paciente) { // adiciona o paciente na tabela
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes"); 
  tabela.appendChild(pacienteTr); // monta a tabela conforme a quantidade de linhas
}
