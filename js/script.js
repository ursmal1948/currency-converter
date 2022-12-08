
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");

let NOK = 2.19;
let USD = 0.22;
let EUR = 0.21;
let GBP = 0.18

formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let amount = amountElement.value;
        let result = resultElement.value;
        let currency = currencyElement.value;

        switch (currency) {
            case "NOK":
                result = amount * NOK;
                break;
            case "USD":
                result = amount * USD;
                break;
                case "EUR":
                result = amount* EUR;
                break;
                case "GBP":
                    result = amount * GBP;
                    break;
        }

        resultElement.innerText = `${amount} PLN = ${result} ${currency}`;
});

