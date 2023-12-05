import React from "react";

const Menu = ({
  enqueue,
  dequeue,
  inputValue,
  setInputValue,
  handleSizeChange,
}) => {
  // Kerboard Events for 'Enter Key'
  const handleKeyPress1 = (e) => {
    if (e.key === "Enter") {
      enqueue();
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
        Enter Queue size:
        <input
          type="text"
          // placeholder="Enter queue size"
          onChange={handleSizeChangeInternal}
        />
      </label>

      <label style={{ marginTop: 15 }}>
        Enter a Value :
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress1}
        />
      </label>

      <button className="btn btn-primary m-2" onClick={enqueue}>
        Enqueue
      </button>
      <button className="btn btn-success m-2" onClick={dequeue}>
        Dequeue
      </button>
      <br />
    </div>
  );
};
export default Menu;
