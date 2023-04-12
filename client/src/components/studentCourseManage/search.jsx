import React, { useState, useEffect } from "react";
import "../table.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [classInfo, setClassInfo] = useState([]);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchSubmit = () => {
    if (search != "") {
      navigate(`/selectCourse/${search}`);
    }
  };

  return (
    <div id="test">
      <h1>Search Classes</h1>
      <div className="wrap">
        <form>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={handleSearch}
            ></input>
            <button
              type="submit"
              className="searchButton"
              onClick={searchSubmit}
            >
              <div id="icon1" onClick={searchSubmit}>
                <FaSearch />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
