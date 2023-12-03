import React, { Component } from "react";

const Menu = ({ limit, visualizeSieve,setLimit}) => {
//   Kerboard Events for 'Enter Key'                                                                                                
  const handleKeyPress1 = (e) => {
    if (e.key === "Enter") {
        visualizeSieve();
    }
  };

  const handleInputChange = (e) => {
    const newLimit = parseInt(e.target.value, 10);
    setLimit(newLimit);
  };

  return (
    <div
      className="nav alert-dark"
      style={{ textAlign: "center", justifyContent: "center" }}
    >
      <label style={{ marginTop: 15, marginRight: "10px" }}>
      Enter a limit :  
      <input
          type="text"
          value={limit}
          onChange={handleInputChange}
          min="1"
          onKeyPress={handleKeyPress1}
          />
      </label>

      <br />
      <button className="btn btn-primary m-2" onClick={visualizeSieve}>
        VISUALIZE
      </button>
      <br />
    </div>
  );
};
export default Menu;
