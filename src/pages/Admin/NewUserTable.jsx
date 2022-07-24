import React, { useEffect, useState, useSyncExternalStore } from "react";
import axios from "axios"
import DataTable from "examples/Tables/DataTable";

import newUsersTableData from "pages/Admin/data/newUsersTableData";
import newUsersTable from "components/newUsersTable";

const NewUserTable = () => {
  const tableData = newUsersTableData();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  

  useEffect(() => {
    const datos = async () => {
      const result = await axios.get('http://localhost:3000/solicitudes', {
      });
      const { columns1, rows1 } = newUsersTable(result.data);
      setColumns(columns1);
      setRows(rows1);
    }
    datos()
  }, [])

  const Tabla = ({columns, rows}) => {
    return (
      <DataTable
        table={{ columns, rows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        noEndBorder
      />
    )
  }

  return (
    <Tabla columns={columns} rows={rows}/>
  )
}

export default NewUserTable;