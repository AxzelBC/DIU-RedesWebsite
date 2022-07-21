import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { Container ,Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SignIn from "layouts/pages/authentication/sign-in";

import bgImage from "assets/images/bg-about-us.jpg";
import routes from "routes/pages.routes";

function ViewArticle() {
    return(
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
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Que nos interesa
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Actividades y proyectos UnixValle
            </MKTypography>
            
            
            
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -30,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >

            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={1} pb={5}>
                        <Card>
                            <Box>
                                <Box xs={12} p={2} textAlign='center'>
                                    <Box display='flex' flexDirection='column' pb={3}>
                                        <Typography variant="h3" fontWeight={700}>
                                            VER ARTÍCULOS
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box>


                                    <div>
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                          <Typography variant='h4' color='error'>Tesis de sustentación</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        {/* Author */}
                                          <Typography variant='h5'>
                                            Aurelio Rivas - John Sanabria
                                          </Typography>
                                        {/* Descripción */}
                                          <Typography variant='body2'>
                                            Esta tesis se basa en la inspección de los sistemas distribuidos dentro de un entorno de trabajo controlado.
                                          </Typography>

                                        {/* Enlace */}
                                        <Box sx={{ p: 2, border: '1px dashed grey',}}>
                                          <Button
                                            variant="outlined"
                                            href="http://eisc.univalle.edu.co/index.php/laboratorios/redes-y-sistemas-distribuidos"
                                            target='_blank'>
                                              <Typography color='black' variant='h6'>
                                                Ver más
                                              </Typography>
                                            </Button>
                                        </Box>
                                        </AccordionDetails>
                                      </Accordion>
                                    </div>



                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
      </Card>
        </>
    )
}

export default ViewArticle;