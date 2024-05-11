import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div className="app p-12 h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div
        className="mx-6 py-3 px-5 rounded-2xl fixed bottom-8 flex items-center justify-center flex-wrap flex-row gap-4"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Button color="red" setBgColor={setBgColor} />
        <Button color="green" setBgColor={setBgColor} />
        <Button color="blue" setBgColor={setBgColor} />
        <Button color="olive" setBgColor={setBgColor} />
        <Button color="gray" setBgColor={setBgColor} />
        <Button color="yellow" setBgColor={setBgColor} textColor="black" />
        <Button color="pink" setBgColor={setBgColor} textColor="black" />
        <Button color="purple" setBgColor={setBgColor} />
        <Button color="lavender" setBgColor={setBgColor} textColor="black" />
        <Button color="white" setBgColor={setBgColor} textColor="black" />
        <Button color="black" setBgColor={setBgColor} />
      </div>
    </div>
  );
}

export default App;
