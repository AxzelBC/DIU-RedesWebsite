import React, { useState } from "react";

import  Axios  from 'axios'

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MDButton from 'components/MDButton/index'

function Article() {

  const [viewState, setViewState] = useState(true);

  const submit = async ({...values}) =>{
    const data = await Axios.post('');
  }

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
                                        <Box sx={{display: 'flex' , p: 2, justifyContent: 'flex-end'}}>
                                          <Button
                                            variant="outlined"
                                            sx={{mr: 2}}
                                            color='secondary'
                                            onClick={() => setViewState(!viewState)}
                                            >
                                              <Typography color='secondary' fontSize={12} fontWeight={700}>
                                                 {viewState ? 'hola' : 'bad'} 
                                              </Typography>
                                            </Button>
                                            <MDButton variant="outlined" color="dark" sx={{mr: 2}}>
                                              <Icon>edit</Icon>&nbsp;edit
                                            </MDButton>
                                            <MDButton variant="outlined" color="primary">
                                              <Icon>delete</Icon>&nbsp;delete
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

export default Article;