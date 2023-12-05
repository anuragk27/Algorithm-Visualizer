import React, { useState, useEffect } from "react";
import "./Array.css"; // Make sure to import your CSS file
import Navbar from "./Navbar";
import Menu from "./menu";

function ArrayVisualizer() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [arraySize, setArraySize] = useState(0);
  const [showArrayDefinition, setShowArrayDefinition] = useState(true);
  const [operations, setOperations] = useState([]); // New state for operations log

  const arrayDefinition = (
    <div className="array-definition">
      <h2 style={{fontFamily:'fantasy',color:'Highlight',fontSize:'70px'}}> ARRAY VISUALIZER</h2>
      <h4 style={{fontFamily:'arial',color:'red', fontWeight:'bold'}}>INSTRUCTIONS TO USE :</h4>
      <ol style={{fontFamily:'arial',fontSize:'23px'}}>
        <li>ENTER THE SIZE OF THE ARRAY</li>
        <li>ENTER THE VALUE THAT YOU WANT TO ADD INTO ARRAY</li>
        <li>CLICK THE ADD ELEMENT BUTTON TO ADD THE ELEMENT INTO ARRAY</li>
        <li>ENTER THE INDEX OF THE ELEMENT THAT YOU WANT TO REMOVE FROM ARRAY</li>
        <li>CLICK THE REMOVE ELEMENT BUTTON TO DELETE THE ELEMENT FROM ARRAY</li>
        <li>ENTER THE INDEX OF THE ELEMENT THAT YOU WANT TO SEE </li>
        <li>CLICK THE SHOW ELEMENT BUTTON TO SEE THE ELEMENT AT THE INDEX</li>
      </ol>
    </div>
  );

  // used to hide the home screen after the array size is shown
  const [firstOperationCompleted, setFirstOperationCompleted] = useState(false);

  useEffect(() => {
    // Check if the operations array has at least one element
    if (operations.length > 0 && !firstOperationCompleted) {
      setShowArrayDefinition(false);
      setFirstOperationCompleted(true);
    }
  }, [operations, firstOperationCompleted]);

  const addElement = () => {
    if (arraySize === 0) {
      alert("Please enter the array size before adding elements.");
      return;
    }

    if (inputValue.trim() === "") {
      alert("Please enter a value.");
      return;
    }

    setShowArrayDefinition(false); // Hide array definition when an action is taken

    const valuesToAdd = inputValue
      .split(" ")
      .filter((value) => value.trim() !== "");

    const totalElements = array.filter((value) => value.trim() !== "").length;

    if (totalElements + valuesToAdd.length > arraySize) {
      alert("Array size limit exceeded. Cannot add more elements.");
      return;
    }

    const newArray = [...array, ...valuesToAdd];

    if (indexValue !== "") {
      setShowMessage(`Value at index ${indexValue}: ${newArray[indexValue]}`);
      // 29/11/2023/11:09
      setOperations([
        ...operations,
        `Added value ${valuesToAdd} at index ${indexValue}`,
      ]);
    } else {
      setArray(newArray);
      setShowMessage("");
      // 29/11/2023/11:09
      setOperations([...operations, `Added value ${valuesToAdd} to the array`]);
    }

    setInputValue("");
  };

  // Modify this function to reset the array when the size changes
  const handleSizeChange = (newSize) => {
    setArray([]);
    setArraySize(newSize);
    setOperations([]); // 1:10
  };

  const removeElement = () => {
    if (
      !indexValue ||
      isNaN(indexValue) ||
      indexValue < 0 ||
      indexValue >= array.length
    ) {
      alert("Invalid index. Please enter a valid index.");
      return;
    }

    const removedValue = array[indexValue];
    setShowArrayDefinition(false); // Hide array definition when an action is taken

    const newArray = [...array];
    newArray.splice(indexValue, 1);

    setArray(newArray);
    setShowMessage(
      `Element '${removedValue}' removed from index ${indexValue}`
    );
    setOperations([
      ...operations,
      `Removed element '${removedValue}' from index ${indexValue}`,
    ]);
    //Reset index
    setIndexValue("");
  };

  const showElement = () => {
    if (!indexValue ||isNaN(indexValue) || indexValue < 0 || indexValue >= array.length) {
      alert("Invalid index. Please enter a valid index.");
      return;
    }

    setShowArrayDefinition(false); // Hide array definition when an action is taken

    setShowMessage(`Value at index ${indexValue}: ${array[indexValue]}`);
    setOperations([
      ...operations,
      `Value at index ${indexValue} is ${array[indexValue]}`,
    ]);
    setIndexValue("");
  };

  const updateArrayView = () => {
    return array.map((value, i) => (
      <div key={i} className="array-element-container">
        <div className="array-element">{value}</div>
        <div className="index-element-below">{i}</div>
      </div>
    ));
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <Menu
          addElement={addElement}
          removeElement={removeElement}
          showElement={showElement}
          inputValue={inputValue}
          setInputValue={setInputValue}
          indexValue={indexValue}
          setIndexValue={setIndexValue}
          handleSizeChange={handleSizeChange} // Pass the handleSizeChange function
        />
        {showArrayDefinition && arrayDefinition}

        {!showArrayDefinition && (
          <div className="home">
            <div id="arrayContainer">
              <h3
                style={{
                  marginTop: "11px",
                  textAlign: "center",
                  backgroundColor: "Highlight",
                }}>
                ARRAY
              </h3>
              <div id="array-container">{updateArrayView()}</div>
            </div>

            <div id="show-container">
              <h3 style={{ backgroundColor: "Highlight" }}>Operations :</h3>
              <ul>
                {operations.map((operation, index) => (
                  <li key={index}>{operation}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ArrayVisualizer;
