import React, { useEffect, useState } from "react";
import "../../table.css";
import {
  FaSearch,
  FaEdit,
  FaRegTrashAlt,
  FaPlus,
  FaFilter,
} from "react-icons/fa";
import { useTable, useFilters, usePagination } from "react-table";
import { Link } from "react-router-dom";
import { ColumnFilter } from "../../columnFilter";
import {
  deleteStudent,
  getAllStudents,
} from "../../../redux/actions/studentAction";
import { useDispatch, useSelector } from "react-redux";

function AdminViewUser() {
  const user = useSelector((state) => state.student);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  const data = React.useMemo(() => user, [user]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "userID",
        Filter: ColumnFilter,
      },
      {
        Header: "Username",
        accessor: "username",
        Filter: ColumnFilter,
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
      },
      {
        Header: "Major",
        accessor: "major",
        Filter: ColumnFilter,
      },
      /*{
        Header: "Department",
        accessor: "department",
        Filter: ColumnFilter,
      },*/
      {
        Header: "Year",
        accessor: "yearOfStudy",
        Filter: ColumnFilter,
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
  } = useTable(
    { columns, data, initialState: { pageSize: 5 } },
    useFilters,
    usePagination
  );
  const [userInfo, setUserInfo] = useState({
    Name: "",
    ID: "",
    Major: "",
    //Department: "",
    Username: "",
    Year: 0,
  });

  const getRowValue = (rowV) => {
    var UserV = JSON.parse(JSON.stringify(rowV));
    setUserInfo({
      Name: UserV.name,
      ID: UserV.userID,
      Major: UserV.major,
      Username: UserV.username,
      //Department: UserV.Department,
      Year: UserV.yearOfStudy,
    });
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
    dispatch(deleteStudent(id));
    console.log(user);
    setWarn(!showWarn);
    setIsBlurred(!isBlurred);
  };

  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
    //console.log(search);
  };
  const searchSubmit = async (event) => {
    event.preventDefault();
    /*try {
      const response = await axios.post("/api/contact", search);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }*/
  };

  return (
    <div id="test">
      {showWarn && (
        <div className="warning">
          <p className="warning-text">Are you sure you want to delete</p>
          <p className="warning-text">
            {userInfo.Name} - {userInfo.ID}?
          </p>
          <button
            onClick={() => deleteConfirm(userInfo.ID)}
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
      <h1>View/Manage User</h1>
      <div
        className={`blur-content ${isBlurred ? "is-blurred" : ""}`}
        style={{ zIndex: 1, pointerEvents: isBlurred ? "none" : "auto" }}
      >
        <Link to="/aAddUser">
          <button className="add-btn">
            <div id="verticalAlign">
              <FaPlus id="plus" size={15} />
              <span id="newCourse">Add new user</span>
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
                      <div className="table_filter">
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
                    {" "}
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
                        to={`/aEditUser/${userInfo.ID}`}
                        state={{ userInfo }}
                      >
                        <FaEdit size={20} style={{ color: "#7D7FEC" }}/>
                      </Link>
                    </td>

                    <td id="td">
                      <button onClick={toggleWarn} id="rm">
                        <FaRegTrashAlt size={20} style={{ color: "#DF5CCA" }}  />
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

export default AdminViewUser;
