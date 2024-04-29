const convertButton = document.querySelector(".convert-button")
const currencySelectOne = document.querySelector(".currency-select-one")
const currencySelect = document.querySelector(".currency-select")



function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor real
  const currencyValueToConverted = document.querySelector(".currency-value")


  var realToday = 1.2
  var dolarToday = 0.2
  var euroToday = 0.18
  var libraToday = 0.16
  var bitcoinToday = 0.0000030



  //************************** REAL X dolar  **************************
  if (currencySelectOne.value == "real" && currencySelect.value == "dolar") {
    
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue * dolarToday)

  }

  //************************  REAL X euro  **************************
  if (currencySelectOne.value == "real" && currencySelect.value == "euro") {

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)



    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue * euroToday)

  }

  //************************  REAL X libra  ****************************

  if (currencySelectOne.value == "real" && currencySelect.value == "libra") {

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue * libraToday)
  }


  //************************  REAL X bitcoin  **************************

  if (currencySelectOne.value == "real" && currencySelect.value == "bitcoin") {

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue * bitcoinToday)

  }

   //************************** REAL X real **************************
  if (currencySelectOne.value == "real" && currencySelect.value == "real") {
    
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue * 0)

  }

  //************************  DOLAR X real  **************************


  if (currencySelectOne.value == "dolar" && currencySelect.value == "real") {

    var realToday = 5.09

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue * realToday)
  }

  //************************  DOLAR X euro  **************************

  if (currencySelectOne.value == "dolar" && currencySelect.value == "euro") {
   
    var euroToday = 0.93

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue * euroToday)
  }

  //************************  DOLAR X libra  **************************
  if (currencySelectOne.value == "dolar" && currencySelect.value == "libra") {
   
    var libraToday = 0.79

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue * libraToday)
  }


   //************************  DOLAR X bitcoin  **************************
   if (currencySelectOne.value == "dolar" && currencySelect.value == "bitcoin") {
   
    var bitcoinToday = 0.00001420

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue * bitcoinToday)

}


//************************  DOLAR X dolar  **************************
if (currencySelectOne.value == "dolar" && currencySelect.value == "dolar") {
currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}).format(inputCurrencyValue)


currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}).format(inputCurrencyValue * 0)
}


//************************  EURO X real  **************************

if (currencySelectOne.value == "euro" && currencySelect.value == "real") {
   
  var realToday = 5.44

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue * realToday)
  
}


//************************  EURO X dolar  **************************

if (currencySelectOne.value == "euro" && currencySelect.value == "dolar") {
   
  var dolarToday = 1.07

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(inputCurrencyValue * dolarToday)

}

//************************  EURO X libra  **************************
if (currencySelectOne.value == "euro" && currencySelect.value == "libra") {
   
  var libraToday = 0.86

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue * libraToday)

}

//************************  EURO X bitcoin  **************************
if (currencySelectOne.value == "euro" && currencySelect.value == "bitcoin") {
   
  var bitcoinToday = 0.000016
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue * bitcoinToday)

}



//************************  EURO X euro  **************************
if (currencySelectOne.value == "euro" && currencySelect.value == "euro") {
   
  
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue * 0)

}

//************************  LIBRA X real  **************************

if (currencySelectOne.value == "libra" && currencySelect.value == "real") {
   
  var realToday = 5.76

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue * realToday)
  
}

  //************************  LIBRA X dolar  **************************
  if (currencySelectOne.value == "libra" && currencySelect.value == "dolar") {
   
    var dolarToday = 1.31
  
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue)
  
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue * dolarToday)
    
  }

 //************************  LIBRA X euro  **************************
 if (currencySelectOne.value == "libra" && currencySelect.value == "euro") {
   
  var euroToday = 1.17
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue * euroToday)

  }


  //************************  LIBRA X bitcoin  **************************

  if (currencySelectOne.value == "libra" && currencySelect.value == "bitcoin") {
   
    var bitcoinToday = 0.000018
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue)


    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue * bitcoinToday)

  }

 //************************  LIBRA X libra  **************************

 if (currencySelectOne.value == "libra" && currencySelect.value == "libra") {
   
  
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue)


  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue * 0 )


}


//************************  BITCOIN X real  **************************

if (currencySelectOne.value == "bitcoin" && currencySelect.value == "real") {
   
  var realToday = 337078.67
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue * realToday)
 }



 //************************  BITCOIN X dolar  **************************
  if (currencySelectOne.value == "bitcoin" && currencySelect.value == "dolar") {
   
    var dolarToday = 70198.50

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue)

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue * dolarToday)
 }


 //************************  BITCOIN X euro  **************************
 if (currencySelectOne.value == "bitcoin" && currencySelect.value == "euro") {
   
  var euroToday = 64725.72

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputCurrencyValue * euroToday)

 }

 
 //************************  BITCOIN X libra **************************
 
 if (currencySelectOne.value == "bitcoin" && currencySelect.value == "libra") {
   
  var libraToday = 55710.30

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP"
  }).format(inputCurrencyValue * libraToday)
 }


 //************************  BITCOIN X bitcoin  **************************


 if (currencySelectOne.value == "bitcoin" && currencySelect.value == "bitcoin") {
  

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue)

  currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC"
  }).format(inputCurrencyValue * 0)
 }

  
}

function changeCurrencyOne (){

  const currencyNameOne = document.getElementById("currency-nameOne")
  const currencyImgOne = document.querySelector(".currency-imgOne")

if (currencySelectOne.value == "real") {
  
  currencyNameOne.innerHTML = "Real brasileiro"
  currencyImgOne.src = "./assets/real - brasil.png"
}

if (currencySelectOne.value == "dolar") {
  
  currencyNameOne.innerHTML = "Dólar americano"
  currencyImgOne.src = "./assets/dolar - USA.png"
}

if (currencySelectOne.value == "euro") {
  
  currencyNameOne.innerHTML = "Euro"
  currencyImgOne.src = "./assets/euro.png"
}

if (currencySelectOne.value == "libra") {
  
  currencyNameOne.innerHTML = "Libra"
  currencyImgOne.src = "./assets/libra.png"
  
}

if (currencySelectOne.value == "bitcoin") {
  
  currencyNameOne.innerHTML = "Bitcoin"
  currencyImgOne.src = "./assets/bitcoin.png"
}

convertValue() 
}


function changeCurrency (){

  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-img")

if (currencySelect.value == "real") {
  
  currencyName.innerHTML = "Real brasileiro"
  currencyImg.src = "./assets/real - brasil.png"
}

if (currencySelect.value == "dolar") {
  
  currencyName.innerHTML = "Dólar americano"
  currencyImg.src = "./assets/dolar - USA.png"
}

if (currencySelect.value == "euro") {
  
  currencyName.innerHTML = "Euro"
  currencyImg.src = "./assets/euro.png"
}

if (currencySelect.value == "libra") {
  
  currencyName.innerHTML = "Libra"
  currencyImg.src = "./assets/libra.png"
}

if (currencySelect.value == "bitcoin") {
  
  currencyName.innerHTML = "Bitcoin"
  currencyImg.src = "./assets/bitcoin.png"
}

convertValue() 
}

currencySelect.addEventListener("change",changeCurrency )
currencySelectOne.addEventListener("change",changeCurrencyOne )
convertButton.addEventListener("click", convertValue)
