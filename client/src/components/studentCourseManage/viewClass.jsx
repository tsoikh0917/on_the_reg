import React, { useState } from "react";
import "../table.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useTable } from "react-table";
import fakeData from "../MOCK_DATA.json";
import { Link } from "react-router-dom";
function ViewClass() {
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
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  const [courseInfo, setCourse] = useState({
    course_ID: "",
    course_name: "",
  });
  React.useEffect(() => {
    console.log(JSON.stringify(courseInfo));
  }, [courseInfo]);
  const getCourse = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    setCourse({
      course_ID: CourseV.course_ID,
      course_name: CourseV.course_name,
    });
  };

  return (
    <div>
      <h1>View Classes</h1>
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
                    <Link to="confirmDelete/new" state={{ courseInfo }}>
                      <FaRegTrashAlt
                        onMouseEnter={() => getCourse(row.original)}
                      />
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

export default ViewClass;
