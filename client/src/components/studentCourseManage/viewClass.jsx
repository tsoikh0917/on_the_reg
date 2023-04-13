import React, { useEffect, useState } from "react";
import "../table.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { useTable, usePagination } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import { getRegisteredCourseById } from "../../redux/actions/registerCourseForStudentAction";

function ViewClass() {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegisteredCourseById(2));
  }, []);
  const data = React.useMemo(() => course, [course]);
  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "courseID",
      },

      {
        Header: "course name",
        accessor: "className",
      },
      {
        Header: "day",
        accessor: "week",
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
  const formatTime = (value) => {
    const date = new Date(value);
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeStr;
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
  } = useTable({ columns, data, initialState: { pageSize: 5 } }, usePagination);

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

  const [showWarn, setWarn] = useState(false);

  const [isBlurred, setIsBlurred] = useState(false);

  const toggleWarn = () => {
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };
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

  return (
    <div>
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
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    id="tr2"
                    {...row.getRowProps()}
                    onMouseEnter={() => getCourse(row.original)}
                  >
                    {row.cells.map((cell) => (
                      <td id="td" {...cell.getCellProps()}>
                        {cell.render("Cell")}{" "}
                      </td>
                    ))}
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

export default ViewClass;
