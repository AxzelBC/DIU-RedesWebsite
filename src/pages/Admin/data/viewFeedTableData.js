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
      { Header: "Tema de asesoria - ¿Fué pertinente el apoyo?", accessor: "pertinente", align: "left" },
      { Header: "¿Como le parecio el espacio y los implementos del laboratorio?", accessor: "espacioImplem", align: "left" },
      { Header: "¿Que podriamos mejorar?", accessor: "mejoras", align: "left" },
    ],

    rows: [
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras:  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras:  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras:  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras:  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
      {
        pertinente: <Author name="Ciberseguridad" codigo="Si,gracias al apoyo logre solucionar mi problema" />,
        espacioImplem: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Adecuado
      </MDTypography>,
        mejoras:  <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
        Aumentar la disponibilidad para monitorias
      </MDTypography>,
      },
    ],
  };
}
