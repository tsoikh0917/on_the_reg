import React, { useState } from "react";
import "../../table.css";
import {
  FaSearch,
  FaRegTrashAlt,
  FaPlus,
  FaFilter,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../../MOCK_DATA.json";
import { Link } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";
import axios from "axios";

function AdminViewCourse() {
  const data = React.useMemo(() => fakeData, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "course_ID",
        Filter: ColumnFilter,
      },

      {
        Header: "course name",
        accessor: "course_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Number of classes",
        accessor: "num",
        Filter: ColumnFilter,
        disableFilters: true,
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
    state: { pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useFilters,
    usePagination
  );

  const [courseInfo, setCourseInfo] = useState({
    course_ID: "",
    course_name: "",
  });
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    setCourseInfo({
      course_ID: CourseV.course_ID,
      course_name: CourseV.course_name,
    });
    console.log(courseInfo);
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
            {courseInfo.course_ID} - {courseInfo.course_name}?
          </p>
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
        <h1>View/Manage Course</h1>

        <div className="wrap"></div>
        <Link to="/aAddCourse">
          <button className="add-btn">
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

                      {toggleFilter ? (
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      ) : null}
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
                        {cell.render("Cell")}
                      </td>
                    ))}

                    <td id="td">
                      <button onClick={toggleWarn} id="rm">
                        <FaRegTrashAlt style={{ color: "red" }} />
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/aSelectClass/${courseInfo.course_ID}`}
                        state={{ courseInfo }}
                      >
                        <FaArrowAltCircleRight />
                      </Link>
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
    </div>
  );
}

export default AdminViewCourse;
