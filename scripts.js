let formulario = document.querySelector(".fale-conosco")
let mascara = document.querySelector(".mascara-form")

console.log(formulario)

function clickButton() {
    formulario.style.left = "700px"
    mascara.style.visibility = "visible"
}

function hideForm() {
    formulario.style.left = "-340"
    mascara.style.visibility = "hidden"
}