import React, { useState, useEffect } from "react";
import "../../table.css";
import { FaSearch, FaEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import { useTable, useFilters } from "react-table";
import fakeData from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";

function AdminViewCourse() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "course ID",
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
  const [courseInfo, setCourseInfo] = useState({
    course_ID: "3100",
    course_name: "",
    day: "",
    time: "",
    place: "",
    department: "",
    instructor: "",
    capacity: 150,
  });

  React.useEffect(() => {}, [courseInfo]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters);
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    setCourseInfo({
      course_ID: CourseV.course_ID,
      course_name: CourseV.course_name,
      day: CourseV.day,
      time: CourseV.time,
      place: CourseV.place,
      department: CourseV.department,
      instructor: CourseV.instructor,
      capacity: CourseV.capacity,
    });
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
            {courseInfo.course_ID} - {courseInfo.course_name}?
          </p>
          <button onClick={toggleWarn} id="rmB" class="yes">
            <p className="warning-text">Yes</p>
          </button>
          <button onClick={toggleWarn} id="rmB" class="no">
            <p className="warning-text">No</p>
          </button>
        </div>
      )}
      <div
        className={`blur-content ${isBlurred ? "is-blurred" : ""}`}
        style={{ zIndex: 1, pointerEvents: isBlurred ? "none" : "auto" }}
      >
        <h1>View/Manage Course</h1>

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
        <Link to="/aAddCourse">
          <button class="add-btn">
            <div id="verticalAlign">
              <FaPlus id="plus" size={15} />
              <span id="newCourse">Add new course</span>
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
                      {column.render("Header")}
                      {column.canFilter ? column.render("Filter") : null}
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
                        {cell.render("Cell")}
                      </td>
                    ))}
                    <td id="td">
                      <button
                        id="rm"
                        onMouseEnter={() => getRowValue(row.original)}
                      >
                        <Link
                          to={`/aEditCourse/${courseInfo.course_ID}`}
                          state={{ courseInfo }}
                        >
                          <FaEdit />
                        </Link>
                      </button>
                    </td>
                    <td id="td" onClick={() => getRowValue(row.original)}>
                      <button onClick={toggleWarn} id="rm">
                        <FaRegTrashAlt style={{ color: "red" }} />
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

export default AdminViewCourse;
