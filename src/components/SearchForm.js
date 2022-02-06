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
    <section>
      <form action="" onSubmit={handleSubmit}>
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
      </form>
    </section>
  );
}

export default SearchForm;
