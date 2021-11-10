var pacientes = document.querySelectorAll(".paciente") // captura todos os pacientes

var tabela = document.querySelector("#tabela-pacientes") //captura a tabela

tabela.addEventListener("dblclick", function(event){ // verifica qual foi a ação feita pelo usuario
    event.target.parentNode.classList.add("fadeOut") // adiciona a classe FadeOut

    setTimeout(function(){
        event.target.parentNode.remove() // remove
    }, 500)
})