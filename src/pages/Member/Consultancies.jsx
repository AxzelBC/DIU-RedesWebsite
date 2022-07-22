import  Axios  from 'axios'

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MDButton from 'components/MDButton/index'

function Consultancies() {
    return(
        <DashboardLayout>
        <DashboardNavbar />
            Ver asesorias solicitadas
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
                        <Card>
                            <Box>
                                <Box xs={12} p={2} textAlign='center'>
                                    <Box display='flex' flexDirection='column' pb={3}>
                                        <Typography variant="h3" fontWeight={700}>
                                            ASESORIAS
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
                                        {/* Quien solicita */}
                                          <Typography variant='h4' color='error' textTransform='uppercase'>
                                            Cristián Ponce
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        {/* Theme */}
                                          <Typography variant='h6'>
                                            Tema: Linux
                                          </Typography>
                                        {/* Hora */}
                                          <Typography variant='body2' color='primary'>
                                            {`Fecha: ${Date()}`}    
                                          </Typography>
                                        {/* Descripción */}
                                          <Typography variant='body2'>
                                            Descripción: Buen día, actualmente compré un portátil y quiero instalarle linux.
                                          </Typography>
                                        {/* Email */}
                                          <Typography variant='body2' color='primary'>
                                            Email: Cristian.ponce@correounivalle.edu.co
                                          </Typography>
                                        {/* student code */}
                                          <Typography variant='body2'>
                                            Código estudiantil: 1925669
                                          </Typography>

                                        {/* Enlace */}
                                        <Box sx={{display: 'flex' , p: 2, justifyContent: 'flex-end'}}>
                                            <MDButton variant="outlined" color="dark" sx={{mr: 2}}>
                                              <Icon>edit</Icon>&nbsp;Confirmar
                                            </MDButton>
                                            <MDButton variant="outlined" color="primary">
                                              <Icon>delete</Icon>&nbsp;Rechazar
                                            </MDButton>
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

export default Consultancies;