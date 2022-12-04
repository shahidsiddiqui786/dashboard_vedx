import React, { useState, useEffect} from "react";
import axios from 'axios';
import Table from "./Components/Table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const columns = [
  {
    Header: ((faSort) => (
      <span>
        ORDER ID<span> </span> 
        <FontAwesomeIcon icon={faSort} />
      </span>
    )),
    accessor: "order_id",
    sortable: true
  },
  {
    Header:   ((faSort) => (
      <span>
        CUSTOMER<span> </span>
        <FontAwesomeIcon icon={faSort} />
      </span>
    )),
    accessor: "customer",
    sortable: true
  },
  {
    Header:   ((faSort) => (
      <span>
        ADDRESS<span> </span> 
        <FontAwesomeIcon icon={faSort} />
      </span>
    )),
    accessor: "full_address",
    sortable: true
  },
  {
    Header:   ((faSort) => (
      <span>
        PRODUCT<span> </span> 
        <FontAwesomeIcon icon={faSort} />
      </span>
    )),
    accessor: "product",
    sortable: true
  },
  {
    Header:   ((faSort) => (
      <span>
        Date Order<span> </span>
        <FontAwesomeIcon icon={faSort} />
      </span>
    )),
    accessor: "date",
    sortable: true
  },
  {
    Header:   ((faSort) => (
      <span>
        STATUS
      </span>
    )),
    accessor: "status",
    sortable: false
  }
]


const App = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
      (async () => {

        const result = await axios("https://my-json-server.typicode.com/Ved-X/assignment/orders");
        setData(result.data);
        setLoader(false);
        console.log(result.data);

      })();
    }, []);


  return (
    <div className="table_container">
      {
        loader ? <span>Loading...</span> : <Table
        data={data}
        columns={columns}
      />
      }
    </div>
  );
};

export default App;
