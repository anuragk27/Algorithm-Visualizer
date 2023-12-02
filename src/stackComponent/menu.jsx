import React, { Component } from "react";

const Menu = ({ push, pop, inputValue, setInputValue, handleSizeChange }) => {
  // Kerboard Events for 'Enter Key'                                                                                                
  const handleKeyPress1 = (e) => {
    if (e.key === "Enter") {
      push();
    }
  };

  const handleSizeChangeInternal = (e) => {
    const newSize = parseInt(e.target.value, 10);
    handleSizeChange(newSize);
  };

  return (
    <div
      className="nav alert-dark"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <label style={{ marginTop: 15, marginRight: "10px" }}>
        Enter Stack size:
        <input type="text" onChange={handleSizeChangeInternal} />
      </label>

      <label style={{ marginTop: 15 }}>
        Enter a value :
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          // Keyboard Event
          onKeyPress={handleKeyPress1}
        />
      </label>
      <br />
      <button className="btn btn-primary m-2" onClick={push}>
        PUSH
      </button>
      <button className="btn btn-success m-2" onClick={pop}>
        POP
      </button>
      <br />
    </div>
  );
};
export default Menu;
