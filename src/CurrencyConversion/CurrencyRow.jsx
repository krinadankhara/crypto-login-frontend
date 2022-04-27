import React from 'react';



const row = {
textAlign: 'center',
paddingTop: 60,



};
const btn = {
backgroundColor: ' #d9d9d9',
marginLeft: 10,
};
const btn2 = {
};
export default function CurrencyRow(props) {
const {
currencyOptions,
selectedCurrency,
onChangeCurrency,
onChangeAmount,
amount,
} = props;
return (
<div style={row}>
<input type="number" className="input" value={amount} onChange={onChangeAmount} style={btn2} className="btn btn-rounded btn-lg" />
<select value={selectedCurrency} onChange={onChangeCurrency} style={btn} className="btn btn-default btn-rounded btn-lg dropdown-toggle">
{currencyOptions.map(option => (
<option key={option} value={option}>{option}</option>
))}
</select>
</div>
);
}