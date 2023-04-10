import React from "react";
import "../../table.css";
import { FaSearch, FaEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { useTable, useFilters } from "react-table";
import fakeData from "../../MOCK_USER.json";
import { Link } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";

function AdminViewUser() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "ID",
        accessor: "ID",
        Filter: ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Major",
        accessor: "Major",
        Filter: ColumnFilter,
      },
      {
        Header: "Department",
        accessor: "Department",
        Filter: ColumnFilter,
      },
      {
        Header: "Year",
        accessor: "Year",
        Filter: ColumnFilter,
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters);
  return (
    <div id="test">
      <h1>View/Manage User</h1>

      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Input course code/ course name for searching"
          ></input>
          <button type="submit" className="searchButton">
            <div id="icon1">
              <FaSearch />
            </div>
          </button>
        </div>
      </div>
      <Link to="/aAddUser">
        <button class="add-btn">
          <div id="verticalAlign">
            <FaPlus id="plus" size={15} />
            <span id="newCourse">Add new user</span>
          </div>
        </button>
      </Link>
      <div id="outer">
        <table id="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr id="tr1" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th id="th" {...column.getHeaderProps()}>
                    <div className="table_filter">
                      {column.render("Header")}
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
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
                        <FaEdit size={20} />
                      </button>
                    </Link>
                  </td>

                  <td id="td">
                    <button id="rm">
                      <FaRegTrashAlt size={20} style={{ color: "red" }} />
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
