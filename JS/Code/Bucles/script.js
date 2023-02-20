//  let num = 0

// if(num<5){
//     num++
//     document.write(num)
// }

// let num2 = 0

// while(num2<5){
//     num2++
//     document.write(num2)
// }
// let num3 = 0

// do{
//     document.write(num3)
//     num3++

// }
// while(num3<5)

// while(num<1000){
//     num++
//     document.write(num)
//     if(num == 10){
//         break
//     }
// }
 
// for(let i = 0; i<6; i++){
//     document.write(i + "<br>")
// }

// let marcar = ["nissan","toyota","mini"]

// for(auto in marcar){
//     document.write(marcar[auto]+ "<br>")
// }

// for(auto of marcar){
//     document.write(auto + "<br>")
// }

arrayl = [ "marfa" , "josefa" , "roberta"] ;
array2 = ["pedro", "marcelo" , arrayl];

for(let array in array2){
    if(array == 2){
        for(let array of arrayl){
            document.write(array + "<br>")
        }
    }else{
        document.write(array2[array] + "<br>")
    }
}