import React, { useState, useEffect } from "react";

import { FaEdit, FaFilter, FaRegTrashAlt } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../../MOCK_DATA.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";
import axios from "axios";

function AdminSelectClass() {
  const navigate = useNavigate();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "day",
        accessor: "day",
        Filter: ColumnFilter,
      },
      {
        Header: "start",
        accessor: "start_time",
        Cell: ({ value, format }) => formatTime(value),
      },
      {
        Header: "end",
        accessor: "end_time",

        Cell: ({ value, format }) => formatTime(value),
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

  const formatTime = (value) => {
    const date = new Date(value);
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeStr;
  };

  const [classInfo, setClassInfo] = useState({
    class_ID: "1",
    day: "",
    time: "",
    place: "",
    department: "",
    instructor: "",
    capacity: 150,
  });
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));

    setClassInfo({
      class_ID: "1",
      day: CourseV.day,
      time: CourseV.time,
      place: CourseV.place,
      department: CourseV.department,
      instructor: CourseV.instructor,
      capacity: CourseV.capacity,
    });
    console.log(classInfo);
  };
  const [toggleFilter, setToggleFilter] = useState(false);
  const showFilter = () => {
    setToggleFilter(!toggleFilter);
  };

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
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useFilters,
    usePagination
  );
  const handleNext = () => {
    nextPage();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handlePrevious = () => {
    previousPage();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          <p className="warning-text">classid?</p>
          <button onClick={toggleWarn} id="rmB" className="yes">
            <p className="warning-text">Yes</p>
          </button>
          <button onClick={toggleWarn} id="rmB" className="no">
            <p className="warning-text">No</p>
          </button>
        </div>
      )}
      <div
        className={`blur-content ${isBlurred ? "is-blurred" : ""}`}
        style={{ zIndex: 1, pointerEvents: isBlurred ? "none" : "auto" }}
      >
        <h1>{courseInfo.course_ID}</h1>
        <h1>{courseInfo.course_name}</h1>
        <button onClick={() => navigate(-1)} className="custom-btn b-search">
          <span>Back</span>
        </button>
        <div>
          <table id="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr id="tr1" {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th id="th" {...column.getHeaderProps()}>
                      <div style={{ display: "column" }}>
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
              {page.map((row) => {
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
                        to={`/aEditCourse/${courseInfo.course_ID}`}
                        state={{ classInfo }}
                      >
                        <FaEdit />
                      </Link>
                    </td>
                    <td id="td">
                      <button onClick={toggleWarn} id="rm">
                        <FaRegTrashAlt style={{ color: "red" }} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {pageOptions.length > 1 && (
            <div id="pagin">
              <button
                className="custom-btn b-page"
                onClick={() => handlePrevious()}
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
                onClick={() => handleNext()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminSelectClass;
