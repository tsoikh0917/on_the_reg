import React, { useState, useEffect } from "react";
import "../table.css";
import { FaSearch, FaFilter, FaArrowAltCircleRight } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../MOCK_DATA.json";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ColumnFilter } from "../columnFilter";
import { useDispatch, useSelector } from "react-redux";
import { getClassByCourseID } from "../../redux/actions/classForStudentAction";
import axios from "axios";

// this function is to select the class
function SelectClass() {
  const navigate = useNavigate();
  const location = useLocation().state;
  const courseInfo = JSON.parse(JSON.stringify(location.courseInfo));
  const classInfo = useSelector((state) => state.classForStudent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClassByCourseID(courseInfo.courseID));
  }, []);
  const data = React.useMemo(() => classInfo, [classInfo]);
  const [search, setSearch] = useState("");

  // these are the columns of the table
  const columns = React.useMemo(
    () => [
      {
        Header: "day",
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
        Header: "place",
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
        disableFilters: true,
      },
    ],
    []
  );

  const [toggleFilter, setToggleFilter] = useState(false);
  const showFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  // time format
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

  // this function is to set the row value
  const [classOut, setClassOut] = useState({
    classID: "",
    week: "",
    start_time: "",
    end_time: "",
    location: "",
    lectureName: "",
    capacity: "",
  });

  // this function is to get the row value
  const getRowValue = (rowV) => {
    var ClassV = JSON.parse(JSON.stringify(rowV));

    setClassOut({
      classID: ClassV.classID,
      week: ClassV.week,
      start_time: ClassV.start_time,
      end_time: ClassV.end_time,
      location: ClassV.location,
      lectureName: ClassV.lectureName,
      capacity: ClassV.capacity,
    });
    console.log(classOut);
  };

  // html part
  return (
    <div id="test">
      <h1>{courseInfo.courseID}</h1>
      <h1>{courseInfo.courseName}</h1>
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
                      to={`/search/confirm/${courseInfo.courseID}-${classOut.classID}`}
                      state={{ courseInfo, classOut }}
                    >
                      <FaArrowAltCircleRight style={{ color: "#7D7FEC" }}/>
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
  );
}

export default SelectClass;
