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
import MDButton from "components/MDButton";


export default function data() {
  const Author = ({name, codigo }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={0} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{codigo}</MDTypography>
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
      { Header: "Usuario", accessor: "usuario", align: "left" },
      { Header: "Equipo", accessor: "computador", align: "left" },
      { Header: "Fecha - Hora", accessor: "fechaHora", align: "left" },
    ],

    rows: [
      {
        usuario: <Author name="John Michael" codigo="1925456-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #12
      </MDTypography>,
        fechaHora: <Job title="18/07/22" description="2:00PM" />
      },
      {
        usuario: <Author name="Alexa Liras" codigo="1123456-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #20
      </MDTypography>,
        fechaHora:  <Job title="12/07/22" description="8:00AM" />
      },
      {
        usuario: <Author name="Laurent Perrier" codigo="1823456-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #9
      </MDTypography>,
        fechaHora:  <Job title="12/07/22" description="11:00AM" />
      },
      {
        usuario: <Author name="Michael Levi" codigo="1997856-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #3
      </MDTypography>,
        fechaHora:  <Job title="26/07/22" description="9:00AM" />
      },
      {
        usuario: <Author name="Richard Gran" codigo="1232923-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #6
      </MDTypography>,
        fechaHora:  <Job title="13/07/22" description="5:00PM" />
      },
      {
        usuario: <Author name="Miriam Eric" codigo="2018345-2711" />,
        computador: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Computador #9
      </MDTypography>,
        fechaHora:  <Job title="22/07/22" description="3:00PM" />
      },
    ],
  };
}
