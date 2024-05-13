import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [pwdLength, setPwdLength] = useState("10");
  const [includeNums, setIncludeNums] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const nums = "0123456789";
    const specialChars = "!@#$%^&*()_+-=<>?,./:;";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    if (includeNums) {
      chars = chars + nums;
    }
    if (includeChars) {
      chars = chars + specialChars;
    }
    for (let i = 0; i < pwdLength; i++) {
      password = password + chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(password);
  }, [pwdLength, includeNums, includeChars, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, pwdLength);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [pwdLength, includeNums, includeChars, passwordGenerator]);

  return (
    <div className="app h-screen bg-black text-orange-600 flex justify-center items-start pt-16 flex-wrap">
      <div className="app__container bg-slate-400 p-4 m-4 flex justify-center items-center flex-col gap-5 rounded-xl flex-wrap">
        <div className="password__display flex justify-center items-center flex-row w-full">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="px-4 py-2 rounded-l-lg w-full outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-700 rounded-r-lg text-white"
          >
            Copy
          </button>
        </div>
        <div className="password__modulators flex justify-center items-center gap-4 flex-wrap">
          <input
            type="range"
            name="length"
            id="length"
            min="6"
            max="30"
            value={pwdLength}
            onChange={(e) => {
              setPwdLength(e.target.value);
            }}
            className="cursor-pointer outline-none"
          />
          <label htmlFor="length">Length ({pwdLength})</label>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            defaultChecked={includeNums}
            onChange={() => {
              setIncludeNums((preValue) => !preValue);
            }}
            className="cursor-pointer outline-none w-5 h-5"
          />
          <label htmlFor="numbers">Numbers</label>
          <input
            type="checkbox"
            name="characters"
            id="characters"
            defaultChecked={includeChars}
            onChange={() => {
              setIncludeChars((preValue) => !preValue);
            }}
            className="cursor-pointer outline-none w-5 h-5"
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
