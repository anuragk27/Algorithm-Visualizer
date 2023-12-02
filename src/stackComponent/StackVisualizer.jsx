import React, { useState } from "react";
import "./StackVisualizer.css"; // Make sure to import your CSS file
import Navbar from "./Navbar";
import Menu from "./menu";

function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [stackSize, setStackSize] = useState(0);
  const [showStackDefinition, setShowStackDefinition] = useState(true);
  const [operations, setOperations] = useState([]);

  const stackDefinition = (
    <div className="stack-definition">
      <h2 style={{fontFamily:'fantasy',color:'Highlight',fontSize:'70px'}}> STACK VISUALIZER</h2>
      <h4 style={{fontFamily:'arial',color:'red', fontWeight:'bold'}}>INSTRUCTIONS TO USE :</h4>
      <ol style={{fontFamily:'arial',fontSize:'25px'}}>
        <li>ENTER THE SIZE OF THE STACK</li>
        <li>ENTER THE VALUE THAT YOU WANT TO PUSH INTO STACK</li>
        <li>CLICK THE PUSH BUTTON TO ADD THE ELEMENT INTO STACK</li>
        <li>CLICK THE POP BUTTON TO DELETE THE ELEMENT FROM TOP OF THE STACK</li>
      </ol>
    </div>
  );

  const push = () => {
    if (stackSize <= 0 || isNaN(stackSize)) {
      alert("Please enter a valid stack size greater than 0.");
      return;
    }
  
    if (inputValue.trim() === "") {
      alert("Please enter a value.");
      return;
    }
  
    setShowStackDefinition(false);
  
    const values = inputValue.split(" ").filter((val) => val.trim() !== "");
  
    if (values.length === 0) {
      alert("Please enter valid values.");
      return;
    }
  
    if (stack.length + values.length > stackSize) {
      alert("Stack size limit exceeded. Cannot add more elements.");
      return;
    }
  
    const newStack = [...stack, ...values];
    setStack(newStack);
  
    // Log the push operation
    setOperations([
      ...operations,
      `Pushed ${values.join(", ")} on top of Stack (index = ${stack.length})`,
    ]);
  
    setInputValue("");
  };
  

  const pop = () => {
    if (stack.length === 0) {
      alert("Stack is empty.");
      return;
    }

    const poppedValue = stack[stack.length - 1]; // Get the value from the top of the stack
    const newStack = [...stack];
    newStack.pop(); // Remove the last element
    setStack(newStack);

    // Log the pop operation
    setOperations([
      ...operations,
      `Popped ${poppedValue} from top of Stack (index = ${stack.length - 1})`,
    ]);
  };

  const updateStackView = () => {
    return stack.map((value, i) => (
      <div
        key={i}
        className="stack-element-container"
        style={{ bottom: `${i * 40}px` }}
      >
        <div className="stack-element">
          {value}
          {i === stack.length - 1 && <span className="top-message">TOP</span>}
        </div>

        <div className="index-element">{i}</div>
      </div>
    ));
  };

  const handleSizeChange = (newSize) => {
    setStack([]);
    setStackSize(newSize);
    setOperations([]); // Reset operations when the stack size changes
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <Menu
          push={push}
          pop={pop}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSizeChange={handleSizeChange}
        />
        {showStackDefinition && stackDefinition}
        {!showStackDefinition && (
          <div className="stack-visualizer">
            <div id="stack-container">
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  backgroundColor: "Highlight",
                }}>
                STACK{" "}
              </h3>
              <div class="stackContainer">{updateStackView()}</div>
            </div>
            <div id="operations-container">
              <h3 style={{ backgroundColor: "Highlight" }}>OPERATIONS </h3>
              <ul>
                {operations.map((operation, index) => (
                  <li style={{ listStyleType: "none" }} key={index}>
                    {operation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default StackVisualizer;
