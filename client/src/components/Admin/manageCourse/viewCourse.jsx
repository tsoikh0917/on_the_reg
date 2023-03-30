import React from "react";
import "../../table.css";
import { FaSearch, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useTable } from "react-table";
import fakeData from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";

function AdminViewCourse() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "course ID",
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
      <h1>View/Manage Course</h1>

      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Input course code/ course name for searching"
          ></input>
          <button type="submit" class="searchButton">
            <div id="icon1">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <div>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
                <th></th>
                <th></th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                  <td>
                    <Link to="/aEditCourse">
                      <button id="rm">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button id="rm">
                      <FaRegTrashAlt />
                    </button>
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

export default AdminViewCourse;