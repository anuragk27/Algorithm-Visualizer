import React, { Component } from "react";

const Menu = ({
  randomizeArray,
  bubbleSort,
  selectionSort,
  insertionSort,
  sortingInProgress,
  isAlreadySorted,
  isSorted,
}) => {
  return (
    <div className="nav alert-dark" style={{ textAlign: 'center', justifyContent:'center' }}>
      <button className="btn btn-primary m-2" onClick={randomizeArray} disabled={sortingInProgress}>
        Randomize
      </button>

      <button className="btn btn-success m-2" onClick={bubbleSort} disabled={isSorted || sortingInProgress || isAlreadySorted}>
        Bubble Sort
      </button>

      <br />
      <button className="btn btn-warning m-2" onClick={selectionSort} disabled={isSorted || sortingInProgress || isAlreadySorted}>
        Selection Sort
      </button>
      <button className="btn btn-primary m-2" onClick={insertionSort} disabled={isSorted || sortingInProgress || isAlreadySorted}>
        Insertion Sort
      </button>
      {/* <button 
            className='btn btn-secondary m-2'
              onClick={quickSort}>
            Quick Sort
        </button> */}
    </div>
  );
};
export default Menu;
