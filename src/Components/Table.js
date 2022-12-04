import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { IntegrateSort } from "./IntegrateSort";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Table = ({ data, columns }) => {
  const [tableData, handleSorting] = IntegrateSort(data);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  

  return (
    <>
      <div className="headerBar">
        <div className="wrapper">
           <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input className="search" placeholder="Search Customer Name" type="text" onChange={event => setQuery(event.target.value)} />
         </div>
     
        <select className="select" onChange={event => setStatus(event.target.value)}>
          <option value={""}>Select Status</option>
          <option value={"Delivered"}>Delivered</option>
          <option value={"Completed"}>Completed</option>
          <option value={"Prepared"}>Prepared</option>
          <option value={"Prepone"}>Prepone</option>
        </select>
      </div>
      <table className="table">
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData, query, status}} />
      </table>
    </>
  );
};

export default Table;