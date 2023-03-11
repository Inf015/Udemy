// function saludar(){
//     respuesta = prompt("Hola como estas?")
//     if (respuesta == "bien") {
//         alert("Que bueno")
        
//     }else{
//         alert("Que mal")
//     }
// }
// saludar()

// function saludar(){
//     alert("hola")
//     return "Todo bien"
// }
// let saludo = saludar()
// document.write(saludo)

// function sum(num1,num2){
//     let res = num1+num2
//     document.write(res)
//     document.write("<br>")
// }

// sum(5,10)

let saludar = (nombre)=>{
    let frase = `Hola ${nombre} Como estas?`
    document.write(frase)
}

saludar("Pedro")