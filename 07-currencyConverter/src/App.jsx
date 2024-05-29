import React, { useState } from "react";
import InputCard from "./components.jsx/InputCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6 p-4 shadow-xl rounded-lg bg-slate-300">
        <InputCard label="From" currencyOptions={currencyOptions} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency={from} amount={amount} onAmountChange={(amount) => setAmount(amount)}/>
        <button className="shadow-lg px-5 py-3 bg-blue-500 rounded-md" onClick={swap}>Swap</button>
        <InputCard label="To" currencyOptions={currencyOptions} amount={convertedAmount} onCurrencyChange={(currency) => setTo(currency)} selectCurrency={to} amountDisable/>
        <button className="bg-red-200 m-4 w-full p-5 rounded-lg" onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
  );
}

export default App;
