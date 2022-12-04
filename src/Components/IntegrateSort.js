import { useState} from "react";

const modify = (data) => {
  data.map((e) => {
    e['product'] = [e['product_title'], e['product_description']];
    e['full_address']=[e['country'],e['address']];
  })
  return data;
}

export const IntegrateSort = (data) => {
  const [tableData, setTableData] = useState(modify(data));
  // modify(data);

  const ConvertToDays = (stringDate) => {
      var parts = stringDate.split('/');
      let totalDays = Number(parts[0])+Number(parts[1])*30+Number(parts[2])*365;
      return totalDays;
  }

  const handleSorting = (sortField, sortOrder) => {
    
    if(sortField === 'date'){
      const sorted = [...tableData].sort((a,b) => {
        console.log(a.date);
        console.log(ConvertToDays(a.date));
        return (ConvertToDays(a.date) - ConvertToDays(b.date)) * (sortOrder === "asc" ? 1 : -1);
      })
      setTableData(sorted);
    }
    else if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return [tableData, handleSorting];
};