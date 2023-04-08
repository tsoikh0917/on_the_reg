import React, { useState } from "react";
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
  React.useEffect(() => {
    //console.log(JSON.stringify(courseInfo));
  }, [courseInfo]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
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

  return (
    <div id="test">
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
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td id="td">
                    <button
                      id="rm"
                      onMouseEnter={() => getRowValue(row.original)}
                    >
                      <Link to="/aEditCourse/new" state={{ courseInfo }}>
                        <FaEdit />
                      </Link>
                    </button>
                  </td>
                  <td id="td" onClick={() => getRowValue(row.original)}>
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
