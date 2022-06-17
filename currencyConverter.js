const input = require('prompt-sync')();

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

let USD = 1;
let JPY = 113.5;
let EUR = 0.89;
let RUB = 74.36;
let GBP = 0.75;

let thatsTrue = true;
let startingCurrency = 0;
let changeCurrency = 0;

while (thatsTrue) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let choice = input();
    if (choice === "1") {
        let convertFrom;
        let convertTo;
        let amount = 0;
        let total = 0;
        let rounded = 0;

        while (amount === 0) {
            console.log("What do you want to convert?")

            convertFrom = input("From: ");

            convertFrom = convertFrom.toUpperCase();

            switch (convertFrom) {
                case "JPY":
                    startingCurrency += JPY;
                    convertTo = input("To: ");
                    convertTo = convertTo.toUpperCase();
                    break;
                case "EUR":
                    startingCurrency += EUR;
                    convertTo = input("To: ");
                    convertTo = convertTo.toUpperCase();
                    break;
                case "RUB":
                    startingCurrency += RUB;
                    convertTo = input("To: ");
                    convertTo = convertTo.toUpperCase();
                    break;
                case "GBP":
                    startingCurrency += GBP;
                    convertTo = input("To: ");
                    convertTo = convertTo.toUpperCase();
                    break;
                case "USD":
                    startingCurrency += USD;
                    convertTo = input("To: ");
                    convertTo = convertTo.toUpperCase();
                    break;
                default:
                    console.log("Unknown currency");
                    break;
            }

            switch (convertTo) {
                case "JPY":
                    changeCurrency += JPY;
                    amount = input("Amount: ");
                    converter(convertFrom, convertTo, amount, total, rounded);
                    break;
                case "EUR":
                    changeCurrency += EUR;
                    amount = input("Amount: ");
                    converter(convertFrom, convertTo, amount, total, rounded);
                    break;
                case "RUB":
                    changeCurrency += RUB;
                    amount = input("Amount: ");
                    converter(convertFrom, convertTo, amount, total, rounded);
                    break;
                case "GBP":
                    changeCurrency += GBP;
                    amount = input("Amount: ");
                    converter(convertFrom, convertTo, amount, total, rounded);
                    break;
                case "USD":
                    changeCurrency += USD;
                    amount = input("Amount: ");
                    converter(convertFrom, convertTo, amount, total, rounded);
                    break;
                case undefined:
                    continue;
                default:
                    console.log("Unknown currency");
                    break;
            }
        }

    } else if (choice === "2") {
        console.log("Have a nice day!");
        thatsTrue = false;
    } else {
        console.log("Unknown input");
    }
}

function converter(convertFrom, convertTo, amount, total, rounded) {
    if (amount >= 1) {
        total = (amount * changeCurrency) / startingCurrency;
        rounded = parseFloat(total).toFixed(4);
        console.log(`Result: ${amount} ${convertFrom} equals ${rounded} ${convertTo}`);
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
    } else {
        console.log("The amount has to be a number");
    }
}
