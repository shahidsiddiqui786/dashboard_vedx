import { useState } from "react";
import {faSort ,faSortUp ,faSortDown} from '@fortawesome/free-solid-svg-icons'

const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className="tableHeader">
      <tr>
        {columns.map(({ Header, accessor, sortable }) => {
            const c2 = sortable
            ? sortField === accessor && order === "asc"
              ? faSortUp
              : sortField === accessor && order === "desc"
              ? faSortDown
              : faSort
            : '';
          return (
            <th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
             
            >
              {Header(c2)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;