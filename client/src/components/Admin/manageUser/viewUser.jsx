import React, { useState } from "react";
import "../../table.css";
import {
  FaSearch,
  FaEdit,
  FaRegTrashAlt,
  FaPlus,
  FaFilter,
} from "react-icons/fa";
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
  const [userInfo, setUserInfo] = useState({
    Name: "Chan Tai Min",
    ID: "",
    Major: "",
    Department: "",
    Year: 0,
  });

  const getRowValue = (rowV) => {
    console.log(rowV);
    var UserV = JSON.parse(JSON.stringify(rowV));
    setUserInfo({
      Name: UserV.Name,
      ID: UserV.ID,
      Major: UserV.Major,
      Department: UserV.Department,
      Year: UserV.Year,
    });
  };
  const [toggleFilter, setToggleFilter] = useState(false);
  const showFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  const [showWarn, setWarn] = useState(false);

  const [isBlurred, setIsBlurred] = useState(false);

  const toggleWarn = () => {
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };

  return (
    <div id="test">
      {showWarn && (
        <div className="warning">
          <p className="warning-text">Are you sure you want to delete</p>
          <p className="warning-text">
            {userInfo.Name} - {userInfo.ID}?
          </p>
          <button onClick={toggleWarn} id="rmB" class="yes">
            <p className="warning-text">Yes</p>
          </button>
          <button onClick={toggleWarn} id="rmB" class="no">
            <p className="warning-text">No</p>
          </button>
        </div>
      )}
      <h1>View/Manage User</h1>
      <div
        className={`blur-content ${isBlurred ? "is-blurred" : ""}`}
        style={{ zIndex: 1, pointerEvents: isBlurred ? "none" : "auto" }}
      >
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
                        {toggleFilter ? (
                          <div>
                            {column.canFilter ? column.render("Filter") : null}
                          </div>
                        ) : null}
                      </div>
                    </th>
                  ))}
                  <th id="th">
                    {" "}
                    {toggleFilter ? (
                      <FaFilter
                        style={{ color: "darkgrey" }}
                        onClick={showFilter}
                      />
                    ) : (
                      <FaFilter id="FaFilter" onClick={showFilter} />
                    )}
                  </th>
                  <th id="th"></th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    id="tr2"
                    {...row.getRowProps()}
                    onMouseEnter={() => getRowValue(row.original)}
                  >
                    {row.cells.map((cell) => (
                      <td id="td" {...cell.getCellProps()}>
                        {cell.render("Cell")}{" "}
                      </td>
                    ))}

                    <td id="td">
                      <Link
                        to={`/aEditUser/${userInfo.ID}`}
                        state={{ userInfo }}
                      >
                        <FaEdit size={20} />
                      </Link>
                    </td>

                    <td id="td">
                      <button onClick={toggleWarn} id="rm">
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
    </div>
  );
}

export default AdminViewUser;
