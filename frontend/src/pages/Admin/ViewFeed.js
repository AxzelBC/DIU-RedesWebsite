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

import viewFeedTableData from "pages/Admin/data/viewFeedTableData";

function ViewFeed() {
    const consultarFeed = async () => {
        const historial = await axios.get("http://localhost:3001/feed", {

        })
    }

    return (
        <DashboardLayout>
        <MDTypography display="block"  fontWeight="medium">
        <h2>Retroalimentaciones</h2>
        <h5>Opiniones</h5>
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

export default ViewFeed;