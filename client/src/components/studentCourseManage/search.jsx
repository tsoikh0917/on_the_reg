import React from "react";
import "../table.css";
import { FaSearch } from "react-icons/fa";
import { useTable } from "react-table";
import fakeData from "../MOCK_DATA.json";
import arrow from "../image/arrow.png";
import { Link } from "react-router-dom";

function Search() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "course_ID",
      },

      {
        Header: "course name",
        accessor: "course_name",
      },
      {
        Header: "day",
        accessor: "day",
      },
      {
        Header: "time",
        accessor: "time",
      },
      {
        Header: "place",
        accessor: "place",
      },
      {
        Header: "department",
        accessor: "department",
      },
      {
        Header: "instructor",
        accessor: "instructor",
      },
      {
        Header: "capacity",
        accessor: "capacity",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div id="test">
      <h1>Search Classes</h1>

      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          ></input>
          <button type="submit" className="searchButton">
            <div id="icon1">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <div>
        <table id="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr id="tr1" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th id="th" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
                <th id="th"></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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
                      <img src={arrow} width="40%" alt="arrow" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
