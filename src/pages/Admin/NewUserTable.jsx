import React, { useState } from "react";
import axios from "axios"
import DataTable from "examples/Tables/DataTable";

import newUsersTableData from "pages/Admin/data/newUsersTableData";
import newUsersTable from "components/newUsersTable";

const NewUserTable = () => {
  let columns, rows;
  ({columns, rows} = newUsersTableData());

  const datos = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/solicitudes', {
      });
      const { columns1, rows1 } = newUsersTable(data);
      //console.log(data)
      //console.log(columns1);
      //console.log("axios " + rows1);
      columns = columns1;
      rows = rows1;
    }
    catch (error) {
      console.log(error.message)
    }
  }
  datos();

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

export default NewUserTable;