{

    const calculateResult = (amount, currency) => {

        const rateNOK = 2.19;
        const rateUSD = 0.22;
        const rateEUR = 0.21;
        const rateGBP = 0.18;

        switch (currency) {
            case "NOK":
                return amount * rateNOK;

            case "USD":
                return amount * rateUSD;

            case "EUR":
                return amount * rateEUR;

            case "GBP":
                return amount * rateGBP;

        }
    };

    const updateResultText = (amount, result, currency) => {

        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const resetButtonElement = document.querySelector(".js-resetButton");

    const onButtonResetElementClick = () => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = ``;
    };

    resetButtonElement.addEventListener("click", onButtonResetElementClick);

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();

};
