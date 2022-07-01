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

export default function data() {
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

  return {
    columns: [
      { Header: "Nombre-código", accessor: "integrante", align: "left" },
      { Header: "Tema de interés y porque desea ingresar", accessor: "tema", align: "left" },
      { Header: "Acción", accessor: "action", align: "center" },
    ],

    rows: [
      {
        integrante: <Author image={team2} name="John Michael" codigo="1925456-2711" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="3743" description="Ingeniería de sistemas" />
      </MDTypography>,
        tema: <Job title="Ciberseguridad" description="Deseo aprender sobre el manejo de seguridad en la web" />,
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team3} name="Alexa Liras" codigo="2021436-3743" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="2711" description="Tecnología de sistemas" />
      </MDTypography>,
        tema:  <Job title="Linux" description="Deseo aprender a instalar y manejar linux en mi pc" />,
        porque: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            alexa
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team4} name="Laurent Perrier" codigo="1945656-2711" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="2711" description="Tecnología de sistemas" />
      </MDTypography>,
        tema:  <Job title="Redes" description="Quiero aprender y practicar la configuracion y manejo de redes" />,
        porque: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            laurent
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team3} name="Michael Levi" codigo="2241466-3743" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="3743" description="Ingeniería de sistemas" />
      </MDTypography>,
        tema:  <Job title="Sistemas distribuidos" description="Aprender a resolver problemas de computación masiva" />,
        porque: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            michael
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team3} name="Richard Gran" codigo="1735468-2711" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="7721" description="Maestría en Ingeniería" />
      </MDTypography>,
        tema:  <Job title="Redes" description="Deseoaprender el funcionamiento de las redes" />,
        porque: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            richard
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
      {
        integrante: <Author image={team4} name="Miriam Eric" codigo="1841469-3743" />,
        programaOEscuela: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        <Job title="3743" description="Ingeniería de sistemas" />
      </MDTypography>,
        tema:  <Job title="Ciberseguridad" description="Deseo aprender sobre la ciberseguridad para aplicarla en mis programas" />,
        porque: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            miriam
          </MDTypography>
        ),
        action: (
          <Stack direction="row" spacing={-2}>
            <MDButton variant="text" color="dark">
              <CheckIcon>aceptar</CheckIcon>&nbsp;aceptar
            </MDButton>
            <MDButton variant="text" color="primary">
              <ClearIcon>denegar</ClearIcon>&nbsp;denegar
            </MDButton>
            <MDButton variant="text" color="dark">
              <AddIcon>mas</AddIcon>&nbsp;ver mas
            </MDButton>
          </Stack>
        ),
      },
    ],
  };
}
