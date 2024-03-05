import "./Search.scss";
import SearchButton from "../SearchButton/SearchButton";
import { useState } from "react";

const Search = ({ onSearchSubmit }) => {
  const [searchInput, setSearchInput] = useState("");

  const setOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const setOnSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchInput);
  };

  return (
    <section className="search">
      <header className="search__header">
        <h4 className="search__heading heading">Search Bookings</h4>
      </header>
      <form className="search__form" onSubmit={setOnSubmit}>
        <label className="search__label" htmlFor="customerName">
          &rarr;
        </label>
        <input
          type="search"
          id="customerName"
          className="search__input"
          placeholder="Customer name"
          onChange={setOnChange}
          value={searchInput}
        />
        <SearchButton />
      </form>
    </section>
  );
};

export default Search;
