function checkIfANumberIsAValidValue (guess) {
    const number = +guess

    if (invalidGuess(number)) {
        elementGuess.innerHTML += '<div>Valor invalido</div>'
        return
    }
    if (numberIsGreaterOrLess(number)) {
        elementGuess.innerHTML +=`<div>Valor inválido: o número secreto precisa estar entre ${lowValue} e ${hightValue}.</div>`;
        return
    }
    if (number === randonNumber) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${randonNumber}</h3>
        <button class="reset" id="reset">Recomeçar</button>
        `
    } else if (number > randonNumber) {
        elementGuess.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-angles-down"></i></div>`
    } else {
        elementGuess.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    }
}

function invalidGuess(number) {
    return Number.isNaN(number)
}


function numberIsGreaterOrLess (number) {
    return number > hightValue || number < lowValue;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'reset'){
    window.location.reload();
    }
})