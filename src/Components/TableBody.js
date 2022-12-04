const TableBody = ({ tableData, columns ,query, status}) => {
    return (
      <tbody>
        {tableData.filter(data => {
          if(query === '') return data;
          else if(data.customer.toLowerCase().includes(query.toLowerCase()))
           return data;
        }).filter(data =>{
          if(status === '') return data;
          else if(data.status.toLowerCase() === status.toLowerCase())
           return data;
        }).map((data) => {
          console.log(data)
          return (
            <tr className="rowStyle" key={data.order_id}>
              {columns.map(({ accessor }) => {
                const cell = data[accessor] ? data[accessor] : "——";

                if(accessor === 'full_address' || accessor === 'product')
                {
                  return <td className={accessor} key = {accessor}>
                    <div className="dataHeader">{cell[0]}</div>
                    <span className="text-muted">{cell[1]}</span>
                  </td>;
                }
                return <td key={accessor}>
                  <span className={accessor +' '+ cell}>{cell}</span>
                </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    );
  };
  
  export default TableBody;