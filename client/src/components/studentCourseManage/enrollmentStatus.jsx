import React, { useState } from "react";
import "../table.css";
import { FaSearch } from "react-icons/fa";
import { useTable } from "react-table";
import fakeData from "../MOCK_ENROLLMENT.json";
import arrow from "../image/arrow.png";

function EnrollmentStatus() {
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div id="test">
      <h1>Enrollment Status</h1>

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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollmentStatus;
