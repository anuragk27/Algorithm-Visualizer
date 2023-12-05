import React from "react";

const Menu = ({
  addElement,
  removeElement,
  showElement,
  inputValue,
  setInputValue,
  indexValue,
  setIndexValue,
  handleSizeChange,
}) => {
  
  // Kerboard Events for 'Enter Key'
    const handleKeyPress1 = (e) => {
      if (e.key === "Enter") {
        addElement();
      }
    };

    const handleKeyPress2 = (e) => {
      if (e.key === "Enter") {
        removeElement();
      }
    };

    const handleSizeChangeInternal = (e) => {
      const newSize = parseInt(e.target.value, 10);
      handleSizeChange(newSize);
    };

  return (
    <div className="nav alert-dark" style={{justifyContent:'center'}}>
      <label style={{marginTop:15,marginRight:'10px',marginLeft:'10px'}}>Enter array size:
      <input
        type="text"
        // placeholder="Enter here"
        onChange={handleSizeChangeInternal}
        style={{ width: '50px',borderRadius:'5px'}}
      />
      </label>
      <br/>

      <label style={{marginTop:15}}>Enter values:
      <input
        type="text"
        id="input-value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // Keybord event
        onKeyPress={handleKeyPress1}
        style={{ width: '250px',borderRadius:'5px'}}
      />
      </label>

      <br />
      <button className="btn btn-primary" style={{ marginTop:'10px',marginBottom:'10px',marginLeft:'1px' }} onClick={addElement}>
        Add Element
      </button>

      <label style={{marginTop:15,marginLeft:7}}>Enter an index:
      <input
        type="text"
        id="index-value"
        value={indexValue}
        onChange={(e) => setIndexValue(e.target.value)}
        onKeyPress={handleKeyPress2}
        style={{ width: '50px', borderRadius:'5px' }}
      />
      </label>

      <br />
      <button className="btn btn-success m-2" onClick={removeElement}>
        Remove Element
      </button>

      <button className="btn btn-info m-2" onClick={showElement}>
        ShowElement
      </button>
    </div>
  );
};
export default Menu;
