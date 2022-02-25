// this will have a search box
//acc to the input filter result array
import React, { useState } from "react";

const Searchbox = ({ callback }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    //code for filter data
    let searchValue = e.target.value;
    console.log(searchValue);
    callback(searchValue);
    setInputValue(searchValue);
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => handleInput(e)} />
    </>
  );
};

export default Searchbox;
