import React from 'react';

const ArbitrageDetector = () => {
    function handleClick() {
       console.log("here")
    }
    
    return (
      <div class = 'abdetector'>
        <button onClick={handleClick}>Click me!</button>
      </div>
    );
  };

  export default ArbitrageDetector;