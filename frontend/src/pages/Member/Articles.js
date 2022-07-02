import React from "react";

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Article() {
    return(
        <DashboardLayout>
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
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
                                          <Typography>Tesis de sustentación</Typography>
                                          

                                        </AccordionSummary>
                                        <AccordionDetails>

                                        {/* Author */}
                                          <Typography>
                                            Aurelio Rivas - John Sanabria
                                          </Typography>

                                        {/* Descripción */}
                                          <Typography>
                                            Esta tesis se basa en la inspección de los sistemas distribuidos dentro de un entorno de trabajo controlado.
                                          </Typography>

                                        {/* Enlace */}
                                          <Button variant="contained">
                                            Ver Artículo
                                          </Button>

                                        </AccordionDetails>
                                      </Accordion>

                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel2a-content"
                                          id="panel2a-header"
                                        >
                                          <Typography>Accordion 2</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                          <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                                          </Typography>
                                        </AccordionDetails>
                                      </Accordion>

                                      <Accordion disabled>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel3a-content"
                                          id="panel3a-header"
                                        >
                                          <Typography>Disabled Accordion</Typography>
                                        </AccordionSummary>
                                      </Accordion>
                                    </div>



                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>
    )
}

export default Article;