// src/components/ArrayVisualizer.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import "./App.css";

const ArrayVisualizer = () => {
  const [array, setArray] = useState(generateRandomArray());
  const [isSorted, setIsSorted] = useState(false);
  const [isAlreadySorted, setIsAlreadySorted] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [sortingInProgress, setSortingInProgress] = useState(false); // New state

  function generateRandomArray() {
    return Array.from({ length: 20 }, () => Math.ceil(Math.random() * 100));
  }

  async function bubbleSort() {

    if (sortingInProgress || isAlreadySorted) {
      return;
    }

    setSortingInProgress(true);

    const newArray = [...array];
    const n = newArray.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const blocks = document.querySelectorAll('.block');
        blocks[j].style.backgroundColor = 'red';
        blocks[j + 1].style.backgroundColor = 'red';

        if (newArray[j] > newArray[j + 1]) {
          [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
          await new Promise((resolve) => setTimeout(resolve, 200));
          setArray([...newArray]);
        }

        blocks[j].style.backgroundColor = 'black';
        blocks[j + 1].style.backgroundColor = 'black';
      }

      const blocks = document.querySelectorAll('.block');
      
      blocks[n - i - 1].style.backgroundColor = 'green';
    }
       // Change the color of all blocks to green after sorting is complete
      const blocks = document.querySelectorAll('.block');
      blocks.forEach((block) => {
      block.style.backgroundColor = 'green';
  });

  setSortingInProgress(false);
  setIsAlreadySorted(true);
  setIsSorted("Sorted");
  }

  async function selectionSort() {

    if (sortingInProgress || isAlreadySorted) {
      return;
    }

    setSortingInProgress(true);

    // if (isAlreadySorted) {
    //   alert('Array is already sorted!');
    //   return;
    // }

    const newArray = [...array];
    const n = newArray.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        const blocks = document.querySelectorAll('.block');
        blocks[j].style.backgroundColor = 'red';
        blocks[minIndex].style.backgroundColor = 'red';

        if (newArray[j] < newArray[minIndex]) {
          minIndex = j;
        }

        blocks[j].style.backgroundColor = 'black';
        blocks[minIndex].style.backgroundColor = 'black';
      }

      [newArray[i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];
      await new Promise((resolve) => setTimeout(resolve, 100));
      setArray([...newArray]);
      const blocks = document.querySelectorAll('.block');
      blocks[i + 1].style.backgroundColor = 'green';
      blocks[i].style.backgroundColor = 'green';

    }

    setSortingInProgress(false);
    setIsAlreadySorted(true);
    setIsSorted("Sorted");
  }

  async function insertionSort() {

    if (sortingInProgress || isAlreadySorted) {
      return;
    }

    setSortingInProgress(true);

    // if (isAlreadySorted) {
    //   alert('Array is already sorted!');
    //   return;
    // }

    const newArray = [...array];
    const n = newArray.length;
  
    for (let i = 1; i < n; i++) {
      const key = newArray[i];
      let j = i - 1;
  
      while (j >= 0 && newArray[j] > key) {
        newArray[j + 1] = newArray[j];
        j = j - 1;
  
        await new Promise((resolve) => setTimeout(resolve, 200));
        setArray([...newArray]);
      }
  
      newArray[j + 1] = key;
      await new Promise((resolve) => setTimeout(resolve, 200));
      setArray([...newArray]);
  
      // Select the blocks after the array is updated
      const blocks = document.querySelectorAll('.block');
      blocks[j + 1].style.backgroundColor = 'red';
      blocks[i].style.backgroundColor = 'red';
  
      // Reset the colors after updating the array
      await new Promise((resolve) => setTimeout(resolve, 200));
      blocks[j + 1].style.backgroundColor = 'green';
      blocks[i].style.backgroundColor = 'green';
      
    }

    setSortingInProgress(false);
    setIsAlreadySorted(true);
    setIsSorted("Sorted");
  }

  async function quickSort(arr, low, high) {
    if (low < high) {
      const pi = await partition(arr, low, high);

      await Promise.all([
        quickSort(arr, low, pi - 1),
        quickSort(arr, pi + 1, high),
      ]);
    }
  }

  async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      const blocks = document.querySelectorAll('.block');
      blocks[j].style.backgroundColor = 'red';
      blocks[i + 1].style.backgroundColor = 'red';

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        await new Promise((resolve) => setTimeout(resolve, 100));
        setArray([...arr]);
      }

      blocks[j].style.backgroundColor = 'black';
      blocks[i + 1].style.backgroundColor = 'black';
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    await new Promise((resolve) => setTimeout(resolve, 100));
    setArray([...arr]);

    const blocks = document.querySelectorAll('.block');
    blocks[i + 1].style.backgroundColor = 'green';

    return i + 1;
  }

  function randomizeArray() {

    if (sortingInProgress) {
      return;
    }

    // setSortingInProgress(true);

    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.style.backgroundColor = 'black';
    });

    setArray(shuffledArray);
    setSearchResult('');
    // setSortingInProgress(false);
    setIsAlreadySorted(false);
    setIsSorted(false); // Reset the sorted state
  }

  return (
    <div className="App">
      <Navbar />
      <Menu
        randomizeArray={randomizeArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        quickSort={quickSort}
        isSorted ={isSorted}
        sortingInProgress={sortingInProgress} // Pass the sortingInProgress state      
      />

      <div id="array" className="center-array">
        {array.map((value, index) => (
          <div
            key={index}
            className="block"
            style={{
              height: `${value * 3}px`,
              transform: `translate(${index * 30}px)`,
            }}
          >
            <label className="block_id">{value}</label>
          </div>
        ))}
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <br />
        <div id="text">
          {isSorted && 'Array is sorted'}
          {searchResult}
        </div>
      </div>
    </div>
  );
};

export default ArrayVisualizer;
