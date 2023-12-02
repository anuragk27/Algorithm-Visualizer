import React, { useState, useEffect } from "react";
import "./QueueVisualizer.css"; // Make sure to import your CSS file
import Navbar from "./Navbar";
import Menu from "./menu";

function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [queueSize, setQueueSize] = useState(0);
  const [showQueueDefinition, setShowQueueDefinition] = useState(true); // New state
  const [operations, setOperations] = useState([]); // New state for operations log

  const queueDefinition = (
    <div className="queue-definition">
      <h2 style={{fontFamily:'fantasy',color:'Highlight',fontSize:'70px'}}> QUEUE VISUALIZER</h2>
      <h4 style={{fontFamily:'arial',color:'red', fontWeight:'bold'}}>INSTRUCTIONS TO USE :</h4>
      <ol style={{fontFamily:'arial',fontSize:'25px'}}>
        <li>ENTER THE SIZE OF THE QUEUE</li>
        <li>ENTER THE VALUE THAT YOU WANT TO ENQUEUE INTO QUEUE</li>
        <li>CLICK THE ENQUEUE BUTTON TO ADD THE ELEMENT INTO QUEUE</li>
        <li>CLICK THE DEQUEUE BUTTON TO DELETE THE ELEMENT FROM FRONT OF THE QUEUE</li>
      </ol>
    </div>
  );

  // Used to hide the home screen after the first operation is completed
  const [firstOperationCompleted, setFirstOperationCompleted] = useState(false);

  useEffect(() => {
    // Check if the operations array has at least one element
    if (operations.length > 0 && !firstOperationCompleted) {
      setShowQueueDefinition(false);
      setFirstOperationCompleted(true);
    }
  }, [operations, firstOperationCompleted]);

  const enqueue = () => {

    if (queueSize <= 0 || isNaN(queueSize)) {
      alert("Please enter a valid Queue size greater than 0.");
      return;
    }

    if (inputValue.trim() === "") {
      alert("Please enter a value.");
      return;
    }

    setShowQueueDefinition(false); // Hide array definition when an action is taken

    const valuesToAdd = inputValue
      .split(" ")
      .filter((val) => val.trim() !== "");

    if (valuesToAdd.length === 0) {
      alert("Please enter valid values.");
      return;
    }

    if (queue.length + valuesToAdd.length > queueSize) {
      alert("Queue size limit exceeded. Cannot add more elements.");
      return;
    }

    const newQueue = [...queue, ...valuesToAdd];
    setQueue(newQueue);
    setInputValue("");

    // Log the enqueue operation
    setOperations([...operations, `Enqueued values ${valuesToAdd} at index  ${queue.length }`]);
  };

  const dequeue = () => {
    if (queue.length === 0) {
      alert("Queue is empty.");
      return;
    }

    const dequeuedValue = queue[0];
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);

    // Log the dequeue operation
    setOperations([...operations, `Dequeued value ${dequeuedValue} from index 0 `  ]);
  };

  const updateQueueView = () => {
    return queue.map((value, i) => (
      <div key={i} className="queue-element-container">
     
        <div className="queue-element">
          {value}</div>
        <div className="element-index">{i}</div>
      </div>
    ));
  };

  // Modify this function to reset the queue when the size changes
  const handleSizeChange = (newSize) => {
    setQueue([]);
    setQueueSize(newSize);
    setOperations([]); // Reset operations log
  };

  return (
    <>
    <div className="App">
      <Navbar />
      <Menu
        enqueue={enqueue}
        dequeue={dequeue}
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSizeChange={handleSizeChange} // Pass the handleSizeChange function
      />
      {showQueueDefinition && queueDefinition}
      {!showQueueDefinition && (
      <div className="main">
        <div className="queue-visualizer">
          <h3
            style={{
              marginTop: "11px",
              textAlign: "center",
              backgroundColor: "Highlight",
            }}>
            QUEUE
          </h3>
          <div id="queue-container">{updateQueueView()}</div>
        </div>

        <div id="showContainer">
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

export default QueueVisualizer;
