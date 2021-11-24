var botaoAdicionar = document.querySelector("#buscar-pacientes"); // busca o botão que possio o Id Buscar paciente
botaoAdicionar.addEventListener("click", function () { // Para quando o usuario clicar, capture esse evento
  var api = new XMLHttpRequest(); // armazena na variavel uma requisição http
  api.open("GET", "https://api-pacientes.herokuapp.com/pacientes", true); // passa os parametros a requisisão 

  api.addEventListener("load", function () { // carrega as informações
    var resposta = api.responseText; // traz as informações em formato de texto
    var pacientes = JSON.parse(resposta); // passa em formato JSON para a validação de usuário aceitar
    var erro = document.querySelector("#erro-ajax"); // captura a div onde é para ser mostrado o erro

    if (api.status == "200") { // se status for sucesso ou http codigo 200 
        erro.classList.add("invisivel"); // adicione classe invisivel no seletor armazenado na variavel erro anterior
      pacientes.forEach(function (pacientes) { // ira realizar a mesma ação para cada usuario que encontrar
        adicionaPacienteNaTabela(pacientes); // função que adiciona o paciente na tabela
      });
    } else { // se não for um status igual a 200 ou sucesso
      erro.classList.remove("invisivel"); // adicione a classe invisivel no seletor armazenado na variavel erro
    }
  });
  api.send(); // envia os dados capturados
});
