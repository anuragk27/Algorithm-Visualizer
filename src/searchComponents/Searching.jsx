// src/components/ArrayVisualizer.js
import React, { useState } from 'react';
import Navbar from './Nav'; // Import the Navbar component
import Menu from './men';
import './App.css';

const Searching = () => {
  const initialArray = generateRandomArray();
  const [array, setArray] = useState(initialArray);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  function generateRandomArray() {
    return Array.from({ length: 20 }, () => Math.ceil(Math.random() * 100));
  }

  function resetArray() {
    // setArray(initialArray);
    setSearchValue('');
    setSearchResult('');

    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
    block.style.backgroundColor = 'black';
    });
  }

  function sortArray() {
    resetArray();
    const sortedArray = [...array].sort((a, b) => a - b);
    setArray(sortedArray);
    setSearchResult('Sorted'); 
  }

  function generateArray() {
    resetArray();
    sortArray();
    setSearchResult('');
  }

  function randomizeArray() {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
      block.style.backgroundColor = 'black'; // Resetting the color to the default
    });

    setArray(shuffledArray);
    setSearchResult('');
  }

  async function binarySearch() {
    resetArray();
    const num = parseInt(searchValue, 10);
  
    if (isNaN(num)) {
      alert('Please enter a number');
      return;
    }
  
    const blocks = document.querySelectorAll('.block');
    setSearchResult('');
  
    // Check if the array is sorted
    const isSorted = array.every((value, index) => index === 0 || value >= array[index - 1]);
  
    if (!isSorted) {
      setSearchResult('Binary search works on sorted arrays. Please sort the array by clicking the Sort Array button.');
      return;
    }
  
    let low = 0;
    let high = blocks.length - 1;
    let indices = [];
  
    while (low <= high) {
      await new Promise((resolve) => setTimeout(resolve, 300));
  
      const mid = Math.floor((low + high) / 2);
      blocks[mid].style.backgroundColor = 'red';
  
      const value = Number(blocks[mid].childNodes[0].innerHTML);
  
      if (value === num) {
        indices.push(mid);
        blocks[mid].style.backgroundColor = 'green';
        
        // Continue searching on both sides for other occurrences
        let left = mid - 1;
        let right = mid + 1;
  
        // Search left
        while (left >= 0 && Number(blocks[left].childNodes[0].innerHTML) === num) {
          indices.push(left);
          blocks[left].style.backgroundColor = 'green';
          left--;
        }
  
        // Search right
        while (right < blocks.length && Number(blocks[right].childNodes[0].innerHTML) === num) {
          indices.push(right);
          blocks[right].style.backgroundColor = 'green';
          right++;
        }
  
        // Break the loop as we've found all occurrences
        break;
      }
  
      if (value > num) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    if (indices.length === 0) {
      setSearchResult('Element Not Found');
    } else {
      // Sort indices in ascending order
      indices.sort((a, b) => a - b);
      setSearchResult(`Element Found at indices ${indices.join(', ')}`);
    }
  }
  
  
  async function linearSearch() {
    resetArray();
    const num = parseInt(searchValue, 10);
  
    if (isNaN(num)) {
      alert('Please enter a number');
      return;
    }
  
    const blocks = document.querySelectorAll('.block');
    setSearchResult('');
  
    let indices = [];
  
    for (let i = 0; i < blocks.length; i += 1) {
      await new Promise((resolve) => setTimeout(resolve, 300));
  
      blocks[i].style.backgroundColor = 'red';
      const value = Number(blocks[i].childNodes[0].innerHTML);
  
      if (value === num) {
        indices.push(i);
        blocks[i].style.backgroundColor = 'green';
      }
    }
  
    if (indices.length === 0) {
      setSearchResult('Element Not Found');
    } else {
      setSearchResult(`Element Found at indices ${indices.join(', ')}`);
    }
  }
  
  return (
    <div className="App">
      <Navbar />      
      <Menu
        randomizeArray={randomizeArray}
        generateArray={generateArray}
        binarySearch={binarySearch}
        linearSearch={linearSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        resetArray={resetArray}
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
        <div id="text">{searchResult}</div>
      </div>
    </div>
  );
};

export default Searching;
