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
        </DashboardLayout>
    )
}

export default Article;