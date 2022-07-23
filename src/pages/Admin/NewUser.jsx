import React, { useState } from "react";
import axios from "axios"
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
import NewUserTable from "./NewUserTable"

// Data
import newUsersTableData from "pages/Admin/data/newUsersTableData";
import newUsersTable from "components/newUsersTable";

function NewUser() {

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
                <NewUserTable></NewUserTable>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default NewUser;