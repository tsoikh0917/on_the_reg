import React, { useState, useEffect } from "react";
import "../table.css";
import { FaSearch, FaFilter, FaArrowAltCircleRight } from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import fakeData from "../MOCK_DATA2.json";
import { useLocation, Link } from "react-router-dom";
import { ColumnFilter } from "../columnFilter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/actions/courseAction";

// this function is to select the course
function SelectCourse() {
  const location = useLocation().state;
  const courseID = location.search;
  const course = useSelector((state) => state.course);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourse(courseID));
    console.log(course);
  }, [courseID]);
  const data = React.useMemo(() => course, [course]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //search submit
  const searchSubmit = () => {
    if (search != "") {
      navigate(`/selectCourse/${search}`);
    }
  };


  const handleBack = () => {
    navigate("/search");
  };

  // these are the columns of the table
  const columns = React.useMemo(
    () => [
      {
        Header: "course id",
        accessor: "courseID",
        Filter: ColumnFilter,
      },

      {
        Header: "course name",
        accessor: "courseName",
        Filter: ColumnFilter,
      },
      { Header: "Department", accessor: "faculty", Filter: ColumnFilter },
      {
        Header: "description",
        accessor: "description",
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

  // this function is used set the course info
  const [courseInfo, setCourseInfo] = useState({
    courseID: "",
    courseName: "",
    facutly: "",
    description: "",
  });

  // this function is used to get the row value
  const getRowValue = (rowV) => {
    var CourseV = JSON.parse(JSON.stringify(rowV));
    console.log(rowV);
    setCourseInfo({
      courseID: CourseV.courseID,
      courseName: CourseV.courseName,
      faculty: CourseV.faculty,
      description: CourseV.description,
    });
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

  //html
  return (
    <div id="test">
      <h1>Select/Search Course</h1>
      <button onClick={() => handleBack()} className="custom-btn b-search">
        <span>Back</span>
      </button>
      <div className="wrap">
        <form>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              onChange={handleSearch}
            ></input>
            <Link to={`/selectCourse/${search}`} state={{ search }}>
              <button
                type="submit"
                className="searchButton"
                onClick={searchSubmit}
              >
                <div id="icon1">
                  <FaSearch />
                </div>
              </button>
            </Link>
          </div>
        </form>
      </div>
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
                      to={`/selectClass/${courseInfo.courseID}`}
                      state={{ courseInfo }}
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

export default SelectCourse;
