import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../contextProvider/Content";
import { Filter } from "./AllComponents";

const SearchCocktail = () => {
  const { setsearch } = useGlobalContext();
  const searchItem = useRef(null);

  const handleChage = () => {
    setsearch(searchItem.current.value);
  };
  useEffect(() => {
    searchItem.current.focus();
  }, []);

  return (
    <div className="search-cocktail">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          ref={searchItem}
          onChange={handleChage}
          placeholder="Search Cocktail"
          id="search"
        />
      </form>
      <Filter />
    </div>
  );
};

export default SearchCocktail;
