import React, { useState, useEffect } from "react";
import "../table.css";
import { FaSearch, FaFilter, FaArrowAltCircleRight } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../MOCK_DATA.json";
import { Link, useNavigate } from "react-router-dom";
import { ColumnFilter } from "../columnFilter";
import axios from "axios";

function Search() {
  const navigate = useNavigate();
  const [classInfo, setClassInfo] = useState([]);

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", search);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "course_ID",
        Filter: ColumnFilter,
        disableFilters: true,
      },

      {
        Header: "course name",
        accessor: "course_name",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "day",
        accessor: "day",
        Filter: ColumnFilter,
      },
      {
        Header: "time",
        accessor: "time",
        Filter: ColumnFilter,
      },
      {
        Header: "place",
        accessor: "place",
        Filter: ColumnFilter,
      },
      {
        Header: "department",
        accessor: "department",
        Filter: ColumnFilter,
      },
      {
        Header: "instructor",
        accessor: "instructor",
        Filter: ColumnFilter,
      },
      {
        Header: "capacity",
        accessor: "capacity",
        Filter: ColumnFilter,
        disableFilters: true,
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
      <h1>Select Classes</h1>
      <button onClick={() => navigate(-1)} className="custom-btn b-search">
        <span>Back</span>
      </button>
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
                    <Link to="/search/confirm">
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
