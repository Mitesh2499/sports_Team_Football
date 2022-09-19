import React from "react";

function Input({ placeholder, value, onChange }) {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <input
      className="p-1 bg-white border border-slate-500"
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
}

export default Input;
