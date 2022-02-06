import React, { useRef } from "react";
import { useGlobalContext } from "../context";
function SearchForm() {
  const { setSearchTerm, setSearchLocation } = useGlobalContext();

  const searchLocationValue = useRef("");
  const searchProfessionValue = useRef("");
  const searchByLoc = () => {
    console.log(searchLocationValue.current.value);
    setSearchLocation(searchLocationValue.current.value);
    setSearchTerm(searchProfessionValue.current.value);
  };
  return (
    <section>
      <div className="user-input">
        <label htmlFor="term">search profession</label>
        <input
          type="text"
          // onChange={searchByProf}
          onChange={searchByLoc}
          ref={searchProfessionValue}
        />
      </div>
      <div className="user-input">
        <label htmlFor="term">search location</label>
        <input type="text" onChange={searchByLoc} ref={searchLocationValue} />
      </div>
    </section>
  );
}

export default SearchForm;
