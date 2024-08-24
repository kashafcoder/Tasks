//Currency conversion rates
const conversionRates = {
  USD: {
    JPY: 111.2,
    CAD: 1.27,
    EUR: 0.85,
    GBP: 0.73,
  },
  EUR: {
    USD: 1.18,
    GBP: 0.86,
    JPY: 130.89,
    CAD: 1.48,
  },
  GBP: {
    USD: 1.38,
    EUR: 1.16,
    JPY: 152.22,
    CAD: 1.73,
  },
  JPY: {
    USD: 0.009,
    EUR: 0.008,
    GBP: 0.007,
    CAD: 0.011,
  },
  CAD: {
    USD: 0.79,
    EUR: 0.68,
    GBP: 0.58,
    JPY: 88.11,
  },
};

function convert() {
  let getamount = document.getElementById("amount").value
  let fromCurrencyElement = document.getElementById("fromCurrency").value
  let toCurrencyElement = document.getElementById("toCurrency").value
  let result = document.getElementById("result");
  let amount = parseFloat(getamount)

  //Validation
 if(getamount === "" || isNaN(getamount) || getamount == 0)
  {
    result.textContent = "Input field cannot be empty";
    result.style.color = "red";
    return;
  }

  if(fromCurrencyElement === toCurrencyElement)
  {
    result.textContent = "Source and target currencies cannot be the same.";
    result.style.color = "red";
    return;
  }

  //Currency conversion
  let currencyConversion =  amount * conversionRates[fromCurrencyElement][toCurrencyElement];
  result.textContent =`Converted Amount: ${amount} ${fromCurrencyElement} = ${currencyConversion.toFixed(2)} ${toCurrencyElement}`
  result.style.color = "green";
  return result;
}
