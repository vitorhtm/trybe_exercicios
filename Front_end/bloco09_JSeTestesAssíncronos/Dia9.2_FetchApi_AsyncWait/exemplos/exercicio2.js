const API_URL = `https://api.coincap.io/v2/assets`;

const divMoedas = document.getElementById("divMoedas")
const listaMoedas = document.getElementById("listaMoedas")

function arrayMoedas(moedas) {
    for (let i of moedas.data) {
        const itens = document.createElement("li")
        itens.innerHTML = `${i.id} (${i.symbol}:  ${i.priceUsd})`
        listaMoedas.appendChild(itens)
    }
}

const fetchCoins = async () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    }
    try {
        arrayMoedas(await (await fetch(API_URL, myObject)).json())
    } catch (error) {
        console.log(error)
    }
}
fetchCoins()