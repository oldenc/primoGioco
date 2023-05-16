
const sasso = document.getElementById("sasso")
const carta = document.getElementById("carta")
const forbici = document.getElementById("forbici")
const risultato = document.getElementById("risultato")
const io = document.getElementById("io")
const computer = document.getElementById("computer")
const scelta = document.getElementById("scelta")

let punteggioMio = 0
let punteggioComputer = 0
let sceltaMia

sasso.addEventListener("click", () =>{
    sceltaMia = "sasso"
    playGame()
})
carta.addEventListener("click", () =>{
    sceltaMia = 'forbici'
    playGame()
})
forbici.addEventListener("click", () =>{
    sceltaMia = 'carta'
    playGame()
})












// Scelta Utente
function sceltaGiocatore(inputGiocatore){
    if (inputGiocatore === "carta" || inputGiocatore === "sasso" || inputGiocatore === "forbici"){
        return inputGiocatore
    } else {
        console.log("errore")
    }
}


// Random del pc
function sceltaPc() {
    const numeroRandom = Math.floor(Math.random() * 3)
    if ( numeroRandom === 0){
        return 'carta'
    } else if (numeroRandom === 1){
        return 'sasso'
    } else if (numeroRandom === 2){
        return 'forbici'
    } 
}






function determinWinner(sceltaUser, sceltaComputer){
if (sceltaUser === sceltaComputer){
    return 'parita'
}
else if(sceltaUser === 'carta' && sceltaComputer === 'forbici'){
    punteggioComputer = punteggioComputer + 1
    return 'vince il computer'
}

else if(sceltaUser === 'forbici' && sceltaComputer === 'carta'){
   punteggioMio += 1
    return 'vince user'
} 

else if(sceltaUser === 'sasso' && sceltaComputer === 'forbici'){
    punteggioMio ++
    return 'vince user'
}

else if(sceltaUser === 'forbici' && sceltaComputer === 'sasso'){
    punteggioComputer = punteggioComputer + 1
    return 'vince il computer'
} 

else if(sceltaUser === 'carta' && sceltaComputer === 'sasso'){
    punteggioMio = punteggioMio + 1
    return 'vince user'
}

else if(sceltaUser === 'sasso' && sceltaComputer === 'carta'){
    punteggioComputer = punteggioComputer + 1
    return 'vince il computer'
    
}
}



function aggiornaRisultatiSchermo(){
    io.innerHTML = `Utente: ${punteggioMio}`
    computer.innerHTML = `Computer: ${punteggioComputer}`
}







const playGame = () => {
    const sceltaUser = sceltaGiocatore(sceltaMia)
    const sceltaComputer = sceltaPc()
    const resultBro = determinWinner(sceltaUser, sceltaComputer)
    aggiornaRisultatiSchermo()
    scelta.innerHTML = resultBro

}



function addResult(risultato){

    const targetElement = document.getElementById("risultato")


    const divElement = document.createElement("div")

    divElement.innerText = risultato
    divElement.className = "pd"

    targetElement.appendChild(divElement)
}



