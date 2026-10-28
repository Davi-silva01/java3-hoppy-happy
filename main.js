

//PARQUE
function happy(){
alert(" Oii, seja bem vindo(a) ao Happy hoppy! antes de brincar venha fazer o seu cadastro de altura para sua segurança!")


    alert ("seja bem vindo!(a) esta pronto para se divertir no melhor parque da america latina? antes disto precisamos da sua altura  em (metros ex: 1.50)")
    let altura = Number (prompt("Diga sua altura (EX: 1.5"))


if (altura >= 1.5){
    alert("seja bem vindo(a) sua presença é nosso presente!")
}
else {
    alert ("infelizmente sua altura não corresponde ao nosso padrão de segurança, Por favor procure outro brinquedo.")
}
}

//MERCADO

function trueorfalse(){
    alert(" bom dia funcionario(a), este site te ajuda a saber se estoque esta baixo. Caso o produto diver a quantidade menor que 5 estará em (baixo)")

    alert("aqui você escreve a quatidade do produro e o site diz se a quantidade é suficiente")
    let quantidade = Number(prompt("diga o produto (exemplo: 1 a 10"))
        if (quantidade >= 5){
            alert ("o estoque está cheio")
        }
        else{
            alert ("o estoque esta baixo")
        }

}

//TAXA

function taxahaad(){
    alert("bem vindo ao Taxa-tron, um mercado exclusivo para descobrir se você será taxado")
    alert("aqui você colocará a quantidade de seus gastos em compras e calcularemos se você foi taxado!")
        let preco = Number(prompt("quanto você gastou em suas compras?"))
            if (preco <= 756.5){
                alert("você foi Taxado em 10%")
            }
            else{
                alert("suas compras Não serão Taxadas")
            }
}

//PASSOU OU NAO PASSOU??????????

function passaounao (){
    alert ("seja bem vindo querido aluno do Emef percorre dos santos!")
    alert("aqui você vai descobrir se passou ou não")
        let nota = Number(prompt(" coloque um numero de 1 a 5"))
        if (nota >= 5 ){
            alert("passou ai meu filho")
        }

        else{
            alert("não passou fiote")
        }
    }