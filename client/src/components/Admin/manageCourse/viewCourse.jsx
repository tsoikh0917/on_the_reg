import React, { useState } from "react";
import "../../table.css";
import {
  FaSearch,
  FaRegTrashAlt,
  FaPlus,
  FaFilter,
  FaArrowAltCircleRight,
  FaEdit,
} from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import { Link, Navigate } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCourse,
  getAllCourses,
} from "../../../redux/actions/courseAction";

function AdminViewCourse() {
  const course = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const data = React.useMemo(() => course, [course]);
  const [search, setSearch] = useState("");
  const [courseInfo, setCourseInfo] = useState({
    courseID: "",
    courseName: "",
  });
  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const searchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", search);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "course ID",
        accessor: "courseID",
        Filter: ColumnFilter,
      },

      {
        Header: "course name",
        accessor: "courseName",
        Filter: ColumnFilter,
      },
      {
        Header: "description",
        accessor: "description",
        Filter: ColumnFilter,
      },
      {
        Header: "faculty",
        accessor: "faculty",
        Filter: ColumnFilter,
      },
      /*{
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
      },*/
    ],
    []
  );

  React.useEffect(() => {}, [courseInfo]);

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

  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    console.log(CourseV);
    setCourseInfo({
      courseID: CourseV["courseID"],
      courseName: CourseV["courseName"],
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

  const deleteConfirm = (id) => {
    dispatch(deleteCourse(id));
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };

  return (
    <div id="test">
      {showWarn && (
        <div className="warning">
          <p className="warning-text">Are you sure you want to delete</p>
          <p className="warning-text">
            {courseInfo.courseID} - {courseInfo.courseName}?
          </p>
          <button
            onClick={() => deleteConfirm(courseInfo.courseID)}
            id="rmB"
            className="yes"
          >
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
                        style={{ color: '#D2D2F9' }}
                        onClick={showFilter}
                      />
                    ) : (
                      <FaFilter id="FaFilter" onClick={showFilter} />
                    )}
                  </th>
                  <th id="th"></th>
                  <th id="th"></th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    id="tr"
                    {...row.getRowProps()}
                    onMouseEnter={() => getRowValue(row.original)}
                  >
                    {row.cells.map((cell) => (
                      <td id="td" {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))}
                    <td id="td">
                      <Link to={`/aEditCourse/${courseInfo.courseID}`}>
                        <FaEdit style={{ color: "#7D7FEC" }} />
                      </Link>
                    </td>
                    <td id="td">
                      <button onClick={toggleWarn} id="rm">
                        <FaRegTrashAlt style={{ color: "#DF5CCA" }} />
                      </button>
                    </td>
                    <td id="td">
                      <Link
                        to={`/aSelectClass/${courseInfo.courseID}`}
                        state={{ courseInfo }}
                      >
                        <FaArrowAltCircleRight  style={{ color: "#7D7FEC" }}/>
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
