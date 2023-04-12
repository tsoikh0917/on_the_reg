import React, { useState, useEffect } from "react";
import "../table.css";
import { FaSearch, FaFilter, FaArrowAltCircleRight } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../MOCK_DATA2.json";
import { Link } from "react-router-dom";
import { ColumnFilter } from "../columnFilter";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchSubmit = () => {
    if (search != "") {
      navigate(`/selectCourse/${search}`);
    }
  };
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "course_ID",
        Filter: ColumnFilter,
      },

      {
        Header: "course name",
        accessor: "course_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Number of classes",
        accessor: "num",
        Filter: ColumnFilter,
      },
    ],
    []
  );
  const [toggleFilter, setToggleFilter] = useState(false);
  const showFilter = () => {
    setToggleFilter(!toggleFilter);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useFilters,
    usePagination
  );
  const [courseInfo, setCourseInfo] = useState({
    course_ID: "3100",
    course_name: "",
    course_num: "",
  });
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    setCourseInfo({
      course_ID: CourseV.course_ID,
      course_name: CourseV.course_name,
      course_num: CourseV.course_num,
    });
  };
  const handleNext = () => {
    nextPage();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePrevious = () => {
    previousPage();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="test">
      <h1>Select/Search Course</h1>
      <button onClick={() => navigate(-1)} className="custom-btn b-search">
        <span>Back</span>
      </button>
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
              <div id="icon1">
                <FaSearch />
              </div>
            </button>
          </div>
        </form>
      </div>
      <div>
        <table id="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr id="tr1" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th id="th" {...column.getHeaderProps()}>
                    <div style={{ display: "column" }}>
                      {column.render("Header")}
                      {toggleFilter ? (
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      ) : null}
                    </div>
                  </th>
                ))}
                <th id="th">
                  {toggleFilter ? (
                    <FaFilter
                      style={{ color: "darkgrey" }}
                      onClick={showFilter}
                    />
                  ) : (
                    <FaFilter id="FaFilter" onClick={showFilter} />
                  )}
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr id="tr2" {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td id="td" {...cell.getCellProps()}>
                      {cell.render("Cell")}{" "}
                    </td>
                  ))}

                  <td id="td">
                    <Link
                      to={`/selectClass/${courseInfo.course_ID}`}
                      state={{ courseInfo }}
                    >
                      <FaArrowAltCircleRight />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {pageOptions.length > 1 && (
          <div id="pagin">
            <button
              className="custom-btn b-page"
              onClick={() => handlePrevious()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <span id="pagin-num">
              Page{"  "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>

            <button
              className="custom-btn b-page"
              onClick={() => handleNext()}
              disabled={!canNextPage}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
