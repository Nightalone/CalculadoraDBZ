function inserir(num){
    let numero = document.querySelector("#tela").innerHTML
    document.querySelector("#tela").innerHTML = numero + num
}

function limpar(){
    document.querySelector("#tela").innerHTML = ''
}

function apagar(){
    let tela = document.querySelector("#tela").innerHTML
    document.querySelector("#tela").innerHTML = tela.substring(0, tela.length -1)
}

function resultado(){

    let result = document.querySelector("#tela").innerHTML

    if(result){
        document.querySelector("#tela").innerHTML = eval(result)
    }
}

function modoEscuro(){
    if(document.querySelector(".dark").innerHTML == "💡 Dark"){

        document.querySelector(".dark").style.transition = "2s"
        document.querySelector(".dark").style.backgroundColor = "#fff"
        document.querySelector(".dark").style.color = "#000"
        document.querySelector(".dark").style.boxShadow = "2px 2px gold"
        document.querySelector(".dark").style.border = "2px solid gold"
        document.querySelector(".dark").innerHTML = "💡 Light"
        document.querySelector("body").style.transition = "2s"
        document.querySelector("body").style.backgroundColor = "#000"
        document.querySelector(".calculadora").style.transition = "2s"
        document.querySelector(".calculadora").style.backgroundImage = "URL('./imagens/vegetassj.webp')"

    }else if(document.querySelector(".dark").innerHTML == "💡 Light"){

        document.querySelector(".dark").style.transition = "2s"
        document.querySelector(".dark").style.backgroundColor = "#000"
        document.querySelector(".dark").style.color = "#fff"
        document.querySelector(".dark").style.boxShadow = "2px 2px "
        document.querySelector(".dark").style.border = "0px solid "
        document.querySelector(".dark").innerHTML = "💡 Dark"
        document.querySelector("body").style.transition = "2s"
        document.querySelector("body").style.backgroundColor = "dodgerblue"
        document.querySelector(".calculadora").style.transition = "2s"
        document.querySelector(".calculadora").style.backgroundImage = "URL('./imagens/vegeta.jpeg')"
        
    }
}