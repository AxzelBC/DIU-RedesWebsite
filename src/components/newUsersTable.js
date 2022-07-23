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
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
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

export default function data(body) {
  const Author = ({ image, name, codigo }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
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

  const datos = body.map((solicitudes) => {
    return {
      integrante: <Author image={team2} name="Alexa Liras" codigo="2021436-3743" />,
      programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="2711" description="Tecnología de sistemas" />
      </MDTypography>,
      tema: <Job title="Linux" description="Deseo aprender a instalar y manejar linux en mi pc" />,
      porque: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          alexa
        </MDTypography>
      ),
      action: (
        <Stack direction="row" spacing={1}>
          <MDButton variant="outlined" color="dark">
            <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
          </MDButton>
          <MDButton variant="outlined" color="primary">
            <ClearIcon>denegar</ClearIcon>&nbsp;denegar
          </MDButton>
          <MDButton variant="outlined" color="dark">
            <AddIcon>mas</AddIcon>&nbsp;ver mas
          </MDButton>
        </Stack>
      )
    }
  });

  return {
    columns1: [
      { Header: "Nombre-código", accessor: "integrante", align: "left" },
      { Header: "Tema de interés y porque desea ingresar", accessor: "tema", align: "left" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows1: datos
  };
}
