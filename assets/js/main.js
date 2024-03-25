let btnSubmit = document.querySelector('#valider')

function sum() {
    let inputHeight = parseFloat(document.querySelector('#height').value)
    let inputWeight = parseFloat(document.querySelector('#weight').value)
    let resultCalcul = inputWeight / (inputHeight * inputHeight)
    let result = document.querySelector('#result')

    result.innerHTML = "IMC : "+ resultCalcul.toFixed(2)
let name = document.querySelector('#name').value
    let message = document.querySelector('#alert')
    if (resultCalcul < 18.5) {
        message.innerHTML = name + ", tu dois manger beaucoup beaucoup plus"
    } else if (resultCalcul >= 18.5 && resultCalcul < 25) {
        message.innerHTML = name + ", t'es normal. Good!"
    } else if (resultCalcul >= 25 && resultCalcul < 30) {
        message.innerHTML = name + ", tu as surpoids. Attention!"
    } else if (resultCalcul >= 30 && resultCalcul < 35) {
        message.innerHTML = name + ", tu as obésité modérée... "
    } else if (resultCalcul >= 35 && resultCalcul < 40) {
        message.innerHTML = name + ", tu as obésité sévère. Vas voir un médécin..."
    }
}