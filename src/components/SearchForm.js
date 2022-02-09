import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
function SearchForm() {
  const { setSearchTerm, setSearchLocation } = useGlobalContext();

  const searchLocationValue = useRef("");
  const searchProfessionValue = useRef("");
  useEffect(() => {
    searchLocationValue.current.focus();
  }, []);

  const searchByLoc = () => {
    console.log(searchLocationValue.current.value);
    setSearchLocation(searchLocationValue.current.value);
    setSearchTerm(searchProfessionValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="form-container">
      <h1 className="search heading">Search Artisans</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="user-input">
          {/* <label htmlFor="term">search profession</label> */}
          <input
            type="text"
            placeholder="search profession"
            onChange={searchByLoc}
            ref={searchProfessionValue}
          />
        </div>
        <div className="user-input">
          {/* <label htmlFor="term">search location</label> */}
          <input
            type="text"
            placeholder="search location"
            onChange={searchByLoc}
            ref={searchLocationValue}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
