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

export default function usersTable(data) {
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
            { Header: "accion", accessor: "action", align: "center" },
        ],

        rows:
            data.map((x) => {
                return {
                    integrante: <Author image={team2} name={x.name} email={x.correo} />,
                    codigo: <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                        {x.codigo}
                    </MDTypography>,
                    plan: <Job title={x.codigoCarrera} description={x.carrera} />,
                    employed: (
                        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                            {x.usuario}
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
                    )
                }
            })
    };
}
