//mapear//
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor real
  const currencyValueToConverted = document.querySelector(".currency-value")

  console.log(currencySelect.value)

  const dolarToday = 4.96
  const euroToday = 5.39
  const bitcoinToday = 329.69
  const libraToday = 6.34



  if (currencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "bitcoin") {

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }

  if (currencySelect.value == "libra") {

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)


}
function changeCurrency() {

  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")


  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dolar - USA.png"
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra esterlina"
    currencyImage.src = "./assets/libra.png"
  }
  convertValue()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)
