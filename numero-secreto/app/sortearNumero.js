const lowValue = 1
const hightValue = 100
const randonNumber = generatorRandonNumber();

function generatorRandonNumber(){
    return parseInt(Math.random() * ((hightValue + 1) - lowValue) + lowValue)
}

console.log('Esse é o número aleatório:', randonNumber);

const elementLowValue = document.getElementById("lowValue")
elementLowValue.innerHTML = lowValue

const elementhightValue = document.getElementById("hightValue")
elementhightValue.innerHTML = hightValue