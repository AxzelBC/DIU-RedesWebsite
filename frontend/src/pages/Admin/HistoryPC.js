import React from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

import historyPcTableData from "pages/Admin/data/historyPcTableData";

function HistoryPC() {
    const { columns, rows } = historyPcTableData();
    return (
        <DashboardLayout>
        <MDTypography display="block"  fontWeight="medium">
        <h2>Historial reserva de equipos</h2>
        <h5>Listado de las reservas de equipos del ultimo mes</h5>
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
    )
}

export default HistoryPC;