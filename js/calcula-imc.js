var pacientes = document.querySelectorAll(".paciente"); // seleciona todos os pacientes

for (var i=0; i < pacientes.length; i++){ // busca todos os dados até a quantidade de pacientes encontrados
        var paciente = pacientes[i]

        var tdPeso = paciente.querySelector(".info-peso"); // captura o peso
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura"); // captura a altura
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc"); // captura o imc

        var pesoEhValido = true; // deixa como verdadeiro como padrão
        var alturaEhValida = true; // deixa como verdadeiro como padrão

        if (peso <= 0 || peso >= 1000) { // se o peso for menor ou igual a 0 ou maior ou igual a 1000 
            console.log("Peso inválido!");
            pesoEhValido = false; // deixa como falso o valor que era setado como verdadeiro
            tdImc.textContent = "Peso inválido"; // adiciona um texto
            paciente.classList.add("paciente-invalido") // adiciona a classe paciente-invalido
        }

        if (altura <= 0 || altura >= 3.00) { // se altura for menor ou igual a 0 ou maior ou igual a 3m 
            console.log("Altura inválida!"); 
            alturaEhValida = false; // deixa como falso o valor que era setado como verdadeiro 
            tdImc.textContent = "Altura inválida"; // adiciona um texto
            paciente.classList.add("paciente-invalido") // adiciona a classe paciente-invalido
            
        }

        if (pesoEhValido && alturaEhValida) { // se o peso e altura estiver correta (verdadeiro)
            var imc = calculaImc(peso,altura) // executa a função abaixo com os parametros recebidos
            tdImc.textContent = imc // retorno do imc 
        }       
}
//Aula 
function calculaImc (peso,altura){ // Função que calcula o IMC
        var imc = 0; // padrão como 0 

        imc = peso / (altura * altura);

        return imc.toFixed(2); // retorna o novo valor
        
    }

    function validaPeso(peso){ // valida o peso do paciente
        if (peso >= 0 && peso <=300){ // se ele for maior ou igual a 0 ou menor ou igual a 300
            return true // retorna como verdadeiro 
        }else { // se não
            return false //retorna falso
        }
    }

    function validaAltura(altura){   // valida a altura do paciente
        if ( altura >= 0 && altura <= 3.00){ // se ele for maior ou igual a 0 ou menor ou igual a 3m
            return true // retorna como verdadeiro 
        }else {
            return false // retorna como falso 
        }
    }