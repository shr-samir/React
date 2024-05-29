import React, { useId } from "react";

const InputCard = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div className="input__container px-4 py-5 flex flex-col gap-4 max-w-lg border rounded-xl shadow-lg bg-white">
      <div className="input__headings flex justify-between ">
        <label htmlFor={amountInputId}>{label}</label>
        <label>Currency Type</label>
      </div>
      <div className="input__data flex justify-between">
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          className="outline-none"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          className="outline-none py-3 px-3"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputCard;
