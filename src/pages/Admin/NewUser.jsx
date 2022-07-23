import React from "react";
import Box from "@mui/material/Box";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

// Data
import usersTableData from "components/newUsersTable";

function NewUser() {
  const { columns, rows } = usersTableData();

  const listarSolicitudesUsuarios = async () => {
    try {
      const answer = await axios.get('http://localhost:3001/nuevoUsuario', {

      });
      ({ columns, rows } = newUsersTable(answer.data));
    }
    catch (error) {
      console.log(error.message)
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography display="block" fontWeight="medium">
        <h2>Solicitudes</h2>
        <h5>Listado de solicitudes para pertenecer al laboratorio lascilab</h5>
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

export default NewUser;