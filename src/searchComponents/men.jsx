import React, {Component} from 'react';
    
const Menu = ({ randomizeArray, generateArray, binarySearch, linearSearch, searchValue,
    setSearchValue }) => {
    return (
      <div className="nav alert-dark" style={{ textAlign: 'center', justifyContent:'center' }}>
        
        <button 
            className='btn btn-primary m-2'
            onClick={randomizeArray}>
            Randomize
        </button>
        <button 
            className='btn btn-success m-2'
            onClick={generateArray}>
            Sort Array
        </button>

        <label style={{marginTop:15}}>
        Number to be Searched:
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <br />
      <button 
            className='btn btn-info m-2'
              onClick={linearSearch}>
            Linear Search
        </button>
        <button 
            className='btn btn-warning m-2'
            onClick={binarySearch}>
            Binary Search
        </button>
      </div>
    );
  };
  export default Menu;