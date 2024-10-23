function soma(num1, num2){
    return num1 + num2
}
function sub(num1, num2){
    return num1 - num2
}
function mult(num1, num2){
    return num1 * num2
}
function div(num1, num2){
    return num1 / num2
}
let op
while(op !== 0){

    let op = parseFloat(prompt("Digite a opção desejada: \n1= soma \n2= subtração \n3= multiplicação \n4= divisão \n 0= sair"))

    let num1 = parseFloat(prompt("Digite o primeiro numero"))
    let num2 = parseFloat(prompt("Digite o segundo numero"))

    switch(op){
        case 1:
            alert (soma(num1, num2))
            
            break
        case 2:
            alert (sub(num1, num2))
            
            break
        case 3:
            alert (mult(num1, num2))
            
            break
        case 4:
           alert (div(num1, num2))
            
            break
            

    }
}
