// PrimeNumberVisualizer.js

import React, { useState } from "react";
import "./PrimeNumberVisualizer.css";
import Navbar from "./primeNavbar";
import Menu from "./primeMenu";

function PrimeNumberVisualizer() {
  const [limit, setLimit] = useState(100);
  const [showPrimeDefinition, setShowPrimeDefinition] = useState(true);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const primeDefinition = (
    <div className="prime-definition">
      <h2 style={{fontFamily:'fantasy',color:'Highlight',fontSize:'70px'}}> ARRAY VISUALIZER</h2>
      <h4 style={{fontFamily:'arial',color:'red', fontWeight:'bold'}}>INSTRUCTIONS TO USE :</h4>
      <ol style={{fontFamily:'arial',fontSize:'23px'}}>
        <li>ENTER THE LIMIT UNTIL WHICH YOU WANT PRIME NUMBERS </li>
        <li>CLICK VISUALIZE BUTTON TO VISUALIZE THE ANIMATION</li>
        <li>ALL THE <span style={{color:'green',fontWeight:'bold'}}>GREEN</span> ELEMENTS ARE PRIME NUMBERS</li>
        <li>ALL THE <span style={{color:"#333",fontWeight:'bold'}}>DARK-GREY</span> ELEMENTS ARE NON-PRIME NUMBERS</li>
      </ol>
    </div>
  );

  async function visualizeSieve() {

    setShowPrimeDefinition(false);

    const container = document.getElementById("container");

    // Create a static grid
    container.innerHTML = "";
    for (let i = 2; i <= limit; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = i;
      container.appendChild(cell);
    }

    await sleep(500); // Initial delay

    // Animate the Sieve of Eratosthenes algorithm
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        container.children[i - 2].classList.add("iterating");
        await sleep(100);

        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;

          container.children[j - 2].classList.remove("iterating");
          container.children[j - 2].classList.add("non-prime");
          await sleep(100);
        }
      }
    }

    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        container.children[i - 2].classList.add("prime");
        await sleep(100);
      }
    }
  }

  return (
    <>
    <Navbar/>
    <Menu 
        limit={limit}
        visualizeSieve={visualizeSieve}
        setLimit={setLimit}
    />
    {showPrimeDefinition && primeDefinition}
    <div>
      <div id="container"></div>
    </div>
     
    </>
    
  );
}

export default PrimeNumberVisualizer;
