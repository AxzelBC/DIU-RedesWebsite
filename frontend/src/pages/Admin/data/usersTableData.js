/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Icon from "@mui/material/Icon";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Stack from '@mui/material/Stack';
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Integrante", accessor: "integrante", align: "left" },
      { Header: "Plan académico", accessor: "plan", align: "center" },
      { Header: "Código", accessor: "codigo", align: "left" },
      { Header: "Usuario", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        integrante: <Author image={team2} name="John Michael" email="john@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        1923652
      </MDTypography>,
        plan: <Job title="3743" description="Ingeniería de sistemas" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            john.michael
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={1}>
            <MDButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
            <MDButton variant="text" color="primary">
              <Icon>delete</Icon>&nbsp;delete
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team3} name="Alexa Liras" email="alexa@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        2012312
      </MDTypography>,
        plan:  <Job title="2711" description="Tecnología de sistemas" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            alexa
          </MDTypography>
        ),
        action: (
          <Tooltip title="Delete">
            <IconButton>
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        ),
      },
      {
        integrante: <Author image={team4} name="Laurent Perrier" email="laurent@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        1852333
      </MDTypography>,
        plan:  <Job title="2711" description="Tecnología de sistemas" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            laurent
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit | Delete
          </MDTypography>
        ),
      },
      {
        integrante: <Author image={team3} name="Michael Levi" email="michael@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        1923652
      </MDTypography>,
        plan:  <Job title="3743" description="Ingeniería de sistemas" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            michael
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={1}>
          <MDButton variant="contained" color="primary" iconOnly="true">
            <Icon>edit</Icon>
          </MDButton>
          <MDButton variant="contained" color="primary" iconOnly="true">
            <Icon>delete</Icon>
          </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team3} name="Richard Gran" email="richard@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        2023325
      </MDTypography>,
        plan:  <Job title="7721" description="Maestría en Ingeniería" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            richard
          </MDTypography>
        ),
        action: (
          <MDButton variant="outlined" color="secondary" size="small">
            <MDTypography variant="caption" color="text">Edit</MDTypography>
            <Icon sx={{ ml: 1 }}>edit</Icon>
          </MDButton>
        ),
      },
      {
        integrante: <Author image={team4} name="Miriam Eric" email="miriam@correounivalle.edu.co" />,
        codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        2223652
      </MDTypography>,
        plan:  <Job title="3743" description="Ingeniería de sistemas" />,
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            miriam
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={1}>
          <MDButton variant="outlined" color="secondary" size="small">
            <MDTypography variant="caption" color="text">Edit</MDTypography>
            <Icon sx={{ ml: 1 }}>edit</Icon>
          </MDButton>
          <MDButton variant="outlined" color="secondary" size="small">
            <MDTypography variant="caption" color="text">Delete</MDTypography>
            <Icon sx={{ ml: 1 }}>delete</Icon>
          </MDButton>
          </Stack>
        ),
      },
    ],
  };
}
