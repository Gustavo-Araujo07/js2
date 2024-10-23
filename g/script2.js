function convertMoeda(valorReais, cotacao, moeda){
    console.log(`R$ ${valorReais} vale ${cotacao * valorReais} em ${moeda}`)

}

function recebVal(valorReais, cotacao, moeda){
    
    convertMoeda(valorReais, cotacao, moeda)

}

let valorReais = prompt("Digite o valor em reais: ")
let cotacao = prompt("Digite a cotacao")
let nomeMoeda = prompt("Digite nome da moeda")

recebVal(valorReais, cotacao, nomeMoeda)

// R$10 vale yyyyy em 'moeda'