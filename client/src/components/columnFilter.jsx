import React from "react";
import "./columnFilter.css";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <input
        placeholder="filter"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        id="filter_i"
      ></input>
    </span>
  );
};
