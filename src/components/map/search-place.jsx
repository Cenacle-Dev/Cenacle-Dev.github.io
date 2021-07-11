import React, { useState } from "react";
import MapContainer from '../map/map-container';

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.currentTarget.value);
    console.log(inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          value={inputText}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={place}/>

    </>
  );
};

export default SearchPlace;