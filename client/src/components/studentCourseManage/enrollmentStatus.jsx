import React, { useEffect, useState } from "react";
import "../table.css";
import { useTable, usePagination } from "react-table";
import fakeData from "../MOCK_ENROLLMENT.json";
import axios from "axios";

function EnrollmentStatus() {
  const [enroll, setEnroll] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setEnroll(response.data))
      .catch((error) => console.log(error));
  }, []);
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Course Code",
        accessor: "course_ID",
      },
      {
        Header: "Course Name",
        accessor: "course_name",
      },

      {
        Header: "Request Type",
        accessor: "type",
      },
      {
        Header: "Message/Warning/Error",
        accessor: "message",
      },
    ],
    []
  );
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
