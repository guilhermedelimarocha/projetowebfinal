var campoFiltro = document.querySelector("#filtrar-tabela"); // captura o campo

campoFiltro.addEventListener("input", function () { // faz a leitura da ação do usuário e realiza uma função
  console.log(this.value);

  var pacientes = document.querySelectorAll(".paciente"); // captura todos os pacientes

  if (this.value.length > 0) { // se a quantidade de dados for maior que 0 ele continua
    for (var i = 0; i < pacientes.length; i++) { // realiza a busca quantas vezes tiver a quantidade de pacientes
      var paciente = pacientes[i]; // transforma em paciente, o resultado do for
      var tdNome = paciente.querySelector(".info-nome"); // busca o nome na tabela
      var nome = tdNome.textContent; // adiciona um textContent
      var expressao = new RegExp(this.value, "i"); // cria uma nova expressao e retira o case sensitive

      if (!expressao.test(nome)) { // se não existir na busca o nome
        paciente.classList.add("invisivel"); // coloca a classe invisivel
      } else { // se não
        paciente.classList.remove("invisivel"); // retira a classe invisivel, dos dados (nome) encontrados
      }
    }
  } else { // se a quantidade não for maior que 0
    for (var i = 0; i < pacientes.length; i++) { // faz a busca de todos os pacientes
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel"); // e retira a classe invisivel
    }
  }
});
