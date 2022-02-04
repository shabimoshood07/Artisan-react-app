import React from "react";
import { useGlobalContext } from "../context";
function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  return <div>Search form</div>;
}

export default SearchForm;
