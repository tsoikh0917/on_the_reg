import React from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <div id="test">
        <h1>Search Classes</h1>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            ></input>
            <button type="submit" class="searchButton">
              <div id="icon1">
                <FaSearch />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
