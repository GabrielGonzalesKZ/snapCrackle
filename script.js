
function snapCrackle(maxValue){


    let valores = ""
    for (let i = 1; i <= maxValue; i++){

    
        if(i%2 == 1 && i%5 !== 0){

            valores += "Snap, " 
        }

        else if(i%2 !== 0 && i%5==0){

            valores += "SnapCrackle,"
        }


        else if(i%5 ==0){

            valores += "Crackle, "
        }
 
        else{

            valores += (`${i}, `)
        }
      
    }
    
        return valores   
}

console.log(snapCrackle(30))

