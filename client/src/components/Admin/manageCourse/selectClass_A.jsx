import React, { useState, useEffect } from "react";

import { FaEdit, FaFilter, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";
import { useDispatch, useSelector } from "react-redux";
import { deleteClass, getClassByCourseID } from "../../../redux/actions/classForAdminAction";

// this function is let admin to select a class
function AdminSelectClass() {
  // get the course id from the url
  const navigate = useNavigate();
  const location = useLocation().state;
  const { id } = useParams();
  const classes = useSelector((state) => state.classForAdmin);
  const dispatch = useDispatch();

  // get the class info from the redux store
  useEffect(() => {
    dispatch(getClassByCourseID(id));
  }, []);

  // set the class info to the form
  const data = React.useMemo(() => classes, [classes]);
  const columns = React.useMemo(
    () => [
      {
        Header: "week",
        accessor: "week",
        Filter: ColumnFilter,
      },
      {
        Header: "start",
        accessor: "start_time",
        Filter: ColumnFilter,
        Cell: ({ value, format }) => formatTime(value),
      },
      {
        Header: "end",
        accessor: "end_time",
        Filter: ColumnFilter,
        Cell: ({ value, format }) => formatTime(value),
      },
      {
        Header: "location",
        accessor: "location",
        Filter: ColumnFilter,
      },
      {
        Header: "instructor",
        accessor: "lectureName",
        Filter: ColumnFilter,
      },
      {
        Header: "capacity",
        accessor: "capacity",
        Filter: ColumnFilter,
      },
      {
        Header: "maxCapacity",
        accessor: "maxCapacity",
        Filter: ColumnFilter,
        disableFilters: true,
      },
    ],
    []
  );

  // this function is used to format the time
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
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useFilters,
    usePagination
  );

  // set the class info to the form
  const [classInfo, setClassInfo] = useState({
    classID: "",
    courseID: "",
    week: "",
    start_time: "",
    end_time: "",
    location: "",
    lectureName: "",
    capacity: "",
    maxCapacity: "",
  });

  // get the row value
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    setClassInfo({
      classID: CourseV.classID,
      courseID: CourseV.courseID,
      week: CourseV.week,
      start_time: CourseV.start_time,
      end_time: CourseV.end_time,
      location: CourseV.location,
      lectureName: CourseV.lectureName,
      capacity: CourseV.capacity,
      maxCapacity: CourseV.maxCapacity,
    });
  };

  // set the class info to the form
  const [toggleFilter, setToggleFilter] = useState(false);
  const showFilter = () => {
    setToggleFilter(!toggleFilter);
  };
  
  // set the class info to the form
  const handleNext = () => {
    nextPage();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // set the class info to the form
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

  const deleteConfirm = (id) => {
    dispatch(deleteClass(id));
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };


  //the html part of the page
  return (
    <div id="test">
      {showWarn && (
        <div className="warning">
          <p className="warning-text">Are you sure you want to delete this class?</p>
          <button onClick={() => deleteConfirm(classInfo.classID)} id="rmB" className="yes">
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
        <h1>{location["courseInfo"]["courseID"]} - {location["courseInfo"]["courseName"]}</h1>
        <Link to={`/aAddClass/${id}`}>
          <button className="add-btn">
            <div id="verticalAlign">
              <FaPlus id="plus" size={15} />
              <span id="newClass">Add new class</span>
            </div>
          </button>
        </Link>
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
                        to={`/aEditClass/${classInfo.classID}`}
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
