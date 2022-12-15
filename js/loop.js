let gpas = [2.1, 4.5, 5.6, 7.7, 1.5]

function displayGPAs (){
    let template = '';
    const DIV = document.getElementById("user-gpas")
    for (let index = 0; index < gpas.length; index++) {
        if(gpas[index] < 2){
            template += `<p style="color :red;">${index} --> ${gpas[index] } FAIL</p>`
        }else if(gpas[index] >= 3.5){
            template += `<p style="color :green;">${index} --> ${gpas[index] } APPROVED</p>`
        }else{
            template += `<p>${index} --> ${gpas[index] } </p>`
        }
        
    }
    DIV.innerHTML=template
}

displayGPAs()