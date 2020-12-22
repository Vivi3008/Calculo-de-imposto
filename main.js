var btn = document.querySelector('button')
var input = document.querySelector('input#vr')
var div = document.querySelector('div#res')
let container = document.querySelector('section#container')
const h2 = document.querySelector('header h2')

//modo dark
const range = document.querySelector('input#dark')

const initialColors = {
    bg: "#cecece",
    title: "#e0841c",
    box: "white",
    txt: "rgba(0, 0, 0, 0.589)",
}

const darkMode = {
    bg: "#131111",
    title: "#e9912d",
    box: "rgba(180, 176, 176, 0.685)",
    txt: "white",
}

function changeColors(colors) {
    window.document.body.style.backgroundColor = colors.bg
    container.style.backgroundColor = colors.box
    h2.style.color = colors.title
    document.querySelector('label').style.color = colors.txt
    document.querySelector('footer a').style.color = colors.txt

}

range.addEventListener('change', (event) => {
    event.target.value == 1 ? changeColors(darkMode) : changeColors(initialColors)
})


//calculo do imposto

btn.addEventListener('click', calcular)

input.addEventListener('click', limpar)


document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") calcular();
})


function calcular() {

    let valor = Number((input.value).replace(',', '.'))

    let base = (valor * 0.6471)

    let icms = (base * 0.17)


    div.classList.add('appear')
    div.innerHTML = `<p>Base Icms: <strong>${base.toFixed(2).replace('.',',')}</strong></p>
    <p>Valor Icms: <strong>${icms.toFixed(2).replace('.',',')}</strong></p>
    <p>CFOP Devolução: <strong>6202</strong></p>
    <p>CFOP Garantia: <strong>5949</strong>`
}


function limpar() {
    if (input != '') {
        this.value = ''
        div.classList.remove('appear')
        div.innerHTML = ""
    }
}