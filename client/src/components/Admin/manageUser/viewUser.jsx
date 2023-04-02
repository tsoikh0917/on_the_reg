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

      <div className="wrap">
        <div className="search">
          <input
            type="text"
            classNameName="searchTerm"
            placeholder="Input course code/ course name for searching"
          ></input>
          <button type="submit" className="searchButton">
            <div id="icon1">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <div id="outer">
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
                    <Link to="/aEditUser">
                      <button id="rm">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td id="td">
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
