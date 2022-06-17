/*
=========================================================
* Basado en: Material Kit 2 React 
=========================================================
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import SignIn from "layouts/pages/authentication/sign-in";

// Routes
import routes from "routes/pages.routes";
import footerRoutes from "routes/footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Inicio() {
  return (
    <>
      <MKBox variant="gradient" bgColor="error" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/login",
            component: <SignIn/>,
            label: "Integrantes",
            color: "default",
          }}
          sticky
          transparent
          relative
          light
          center
        />
      </MKBox>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={12}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Bienvenidos
            </MKTypography>
            <MKTypography variant="h3" color="white" opacity={0.8} mt={3} mb={3} align="center">
              LABORATORIO DE REDES Y SISTEMAS DISTRIBUIDOS
            </MKTypography>
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgColor="error"
              transparent
              borderRadius="lg"
            >
              <MKTypography variant="h5" color="white" mt={2} mb={2} mr={8} ml={8} align="center">
                Laboratorio dedicado a la docencia e investigación, usado como ambiente de pruebas
                para los cursos de sistema operativos, redes y sistemas distribuidos. En este
                espacio los estudiante tienen la posibilidad de explorar diferentes tecnologías de
                computación distribuida a través de ambientes virtuales de computación.
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Inicio;
