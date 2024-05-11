import React from "react";

function Button({ color, setBgColor, textColor = "white" }) {
  return (
    <button
      className="border-none px-5 py-2 rounded-full shadow-sm hover:shadow-2xl"
      style={{ backgroundColor: color, color: textColor }}
      onClick={() => setBgColor(color)}
    >
      {color[0].toUpperCase() + color.slice(1, color.length)}
    </button>
  );
}

export default Button;
