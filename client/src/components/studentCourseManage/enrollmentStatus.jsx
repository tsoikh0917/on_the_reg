import React, { useEffect, useState } from "react";
import "../table.css";
import { useTable, usePagination } from "react-table";
import fakeData from "../MOCK_ENROLLMENT.json";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredCourseById } from "../../redux/actions/registerCourseForStudentAction";

// this function is used to show the enrollment status
function EnrollmentStatus() {
  const [enroll, setEnroll] = useState([]);
  //TODO: Add student ID
  const course = useSelector((state) => state.registerCourseForStudent);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegisteredCourseById(user?.userID));
    console.log("course: " + JSON.stringify(course));
  }, []);
  const data = React.useMemo(() => course, [course]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Status",
        accessor: "statusID",
        Cell: ({ value, format }) => formatStatus(value),
      },
      {
        Header: "Course Code",
        accessor: "courseID",
      },
      {
        Header: "Course Name",
        accessor: "courseName",
      },
    ],
    []
  );

  // this function is used to format the status
  const formatStatus = (value) => {
    if (value === 1) {
      return "success";
    } else if (value === 2) {
      return "Waitlist";
    } else if (value === 3) {
      return "Error";
    }
  };
  //html part
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
  } = useTable({ columns, data, initialState: { pageSize: 5 } }, usePagination);
  return (
    <div id="test">
      <h1>Enrollment Status</h1>

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
                </tr>
              );
            })}
          </tbody>
        </table>
        {pageOptions.length > 1 && (
          <div id="pagin">
            <button
              className="custom-btn b-page"
              onClick={() => previousPage()}
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
              onClick={() => nextPage()}
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

export default EnrollmentStatus;
