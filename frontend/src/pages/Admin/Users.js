import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";
import usersTable from "models/usersTable";

// Data
import usersTableData from "pages/Admin/data/usersTableData";

function Users() {
  //var columns, rows;
  const { columns, rows } = usersTableData();

  const listarSolicitudes = async () => {
    try {
      const answer = await axios.get('http://localhost:3001/usuarios', {

      });
      ({ columns, rows } = usersTable(answer.data));
    }
    catch (error) {
      console.log(error.message)
    }
  }

  return (
    <DashboardLayout>
      <MDTypography display="block" fontWeight="medium">
        <h2>Integrantes activos</h2>
        <h5>Listado de los miembros del laboratorio lascilab</h5>
      </MDTypography>
      <MDBox pt={3} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;