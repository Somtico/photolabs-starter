import React, { useState } from "react";
import "../styles/SearchBar.scss";

const SearchBar = ({ searchPhotos }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (typeof query === 'string' && query.trim()) {
      searchPhotos(query.trim());
    } else {
      console.error("Invalid search query");
      // Optionally, you can set an error state here to display to the user
    }
  };

  return (
    <div className="search-bar">
      <input
        className="input"
        type="text"
        name="search"
        id="search"
        value={query}
        onChange={handleInputChange}
        aria-label="Search photos"
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
