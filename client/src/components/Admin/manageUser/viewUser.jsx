import React from "react";
import "../../table.css";
import { FaSearch, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useTable } from "react-table";
import fakeData from "../../MOCK_USER.json";
import { Link } from "react-router-dom";

function AdminViewUser() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "ID",
        accessor: "ID",
      },
      {
        Header: "Major",
        accessor: "Major",
      },
      {
        Header: "Department",
        accessor: "Department",
      },
      {
        Header: "Year",
        accessor: "Year",
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
                    <Link to="/aEditUser">
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

export default AdminViewUser;