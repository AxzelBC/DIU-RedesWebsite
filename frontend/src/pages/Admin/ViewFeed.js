
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button, Icon } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MDButton from 'components/MDButton/index'

function ViewFeed() {

    const consultarFeed = async () => {
        const historial = await axios.get("http://localhost:3001/feed", {

        })
    }

    return (
        <DashboardLayout>
         Ver las opiniones
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
                        <Card>
                            <Box>
                                <Box xs={12} p={2} textAlign='center'>
                                    <Box display='flex' flexDirection='column' pb={3}>
                                        <Typography variant="h3" color='black' fontWeight={700}>
                                            Retroalimentaciones
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
                                        {/* Quien solicita- Tema asesoria*/}
                                          <Typography variant='h4' color='black' textTransform='uppercase'>
                                            Juan Perez - Ciberseguridad
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        {/* Asesor- codigo*/}
                                          <Typography variant='body2'>
                                          <strong> Asesor:</strong><br/>
                                            Wilmer Cantillo - 1925669  
                                          </Typography>
                                        {/* Hora */}
                                          <Typography variant='body2' color='grey'>
                                          <strong>Fecha:</strong><br/>
                                            {`${Date()}`}    
                                          </Typography>
                                        {/* Cuestionario */}
                                          <Typography variant='body2'>
                                          <strong>¿Fué pertinente el apoyo?:</strong><br/>
                                            Sí, gracias al apoyo logre solucionar mi problema.
                                          </Typography>
                                          <Typography variant='body2'>
                                          <strong>¿Comó le pareció el espacio y los implementos del laboratorio?:</strong><br/>
                                            Adecuado, ya que contaban con lo necesario para el desarrollo de la solución
                                          </Typography>
                                          <Typography variant='body2'>
                                          <strong>¿Qué podriamos mejorar?:</strong><br/>
                                            Aumentar la disponibilidad para monitorias
                                          </Typography>

                                        </AccordionDetails>
                                      </Accordion>
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                        {/* Quien solicita- Tema asesoria*/}
                                          <Typography variant='h4' color='black' textTransform='uppercase'>
                                            Christian Villanueva - Linux
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        {/* Asesor- codigo*/}
                                          <Typography variant='body2'>
                                          <strong>Asesor:</strong><br/>
                                            Alejandro Cardona - 1825669
                                          </Typography>
                                        {/* Hora */}
                                          <Typography variant='body2' color='grey'>
                                          <strong>Fecha:</strong><br/>
                                            {`${Date()}`}    
                                          </Typography>
                                        {/* Preguntas */}
                                          <Typography variant='body2'>
                                          <strong>¿Fué pertinente el apoyo?:</strong><br/>
                                            Sí, gracias a la ayuda del compañero logre instalar exitosamente linux.
                                          </Typography>
                                          <Typography variant='body2'>
                                          <strong>¿Comó le pareció el espacio y los implementos del laboratorio?:</strong><br/>
                                            Adecuado, tienen un espacio de estudio tranquilo y agradable .
                                          </Typography>
                                          <Typography variant='body2'>
                                          <strong>¿Qué podriamos mejorar?:</strong><br/>
                                            Aumentar la disponibilidad para monitorias, ya que casi no logro 
                                          </Typography>
                                          
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

export default ViewFeed;