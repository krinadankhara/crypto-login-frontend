import React, { useEffect, useState } from 'react';
import { Label } from 'react-bootstrap';
import CurrencyRow from './CurrencyRow.jsx';



const head = {
color: 'white',
backgroundColor: 'black',
textAlign: 'center',
fontSize: 40,
paddingTop: 5,
paddingBottom: 10,
};



const row = {
textAlign: 'center',
};



const box = {
// backgroundColor: '#000000',
padding: 80,
backgroundImage: 'linear-gradient(to bottom right, LightSlateGray, grey)',
};



const equals = {
textAlign: 'center',
marginLeft: 15,
marginTop: 50,
marginRight: 125,



};
// const BASE_URL = 'http://data.fixer.io/api/latest?access_key=3e17d038f709933e14a6ff98b3e1a832';
const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/USD';
function CurrencyConversion() {
const [currencyOptions, setCurrencyOptions] = useState([]);
const [fromCurrency, setFromCurrency] = useState();
const [toCurrency, setToCurrency] = useState();
const [exchangeRate, setExchangeRate] = useState();
const [amount, setAmount] = useState(1);
const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
const myImg = './1.png';
let toAmount; let fromAmount;
if (amountInFromCurrency) {
fromAmount = amount;
toAmount = amount * exchangeRate;
} else {
toAmount = amount;
fromAmount = amount / exchangeRate;
}




useEffect(() => {
fetch(BASE_URL)
.then(res => res.json())
.then((data) => {
const firstCurrency = Object.keys(data.rates)[0];
setCurrencyOptions([...Object.keys(data.rates)]);
setFromCurrency(data.base);
setToCurrency(firstCurrency);
setExchangeRate(data.rates[firstCurrency]);
});
}, []);




useEffect(() => {
if (fromCurrency != null && toCurrency != null) {
try {
fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
.then(res => res.json())
.then(data => setExchangeRate(data.rates[toCurrency]));
} catch (e) {
this.setState({ errorMessage: e.message });
}
}
}, [fromCurrency, toCurrency]);



function handleFromAmountChange(e) {
setAmount(e.target.value);
setAmountInFromCurrency(true);
}



function handleToAmountChange(e) {
setAmount(e.target.value);
setAmountInFromCurrency(false);
}




return (
<>
<div style={box}>
<h2 style={head}>Currency Conversion</h2>
<CurrencyRow
currencyOptions={currencyOptions}
selectedCurrency={fromCurrency}
onChangeCurrency={e => setFromCurrency(e.target.value)}
onChangeAmount={handleFromAmountChange}
amount={fromAmount}
/>
<div style={equals}>=</div>
<CurrencyRow
currencyOptions={currencyOptions}
selectedCurrency={toCurrency}
onChangeCurrency={e => setToCurrency(e.target.value)}
onChangeAmount={handleToAmountChange}
amount={toAmount}
/>
</div>
</>
);
}



export {CurrencyConversion};