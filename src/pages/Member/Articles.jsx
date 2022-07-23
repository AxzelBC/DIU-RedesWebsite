import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

import Axios from 'axios'

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MDButton from 'components/MDButton/index'
import theme from "assets/theme";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 3, 3),
    transform: 'traslate(-50%, -50%)',
  },
  textfield: {
    width: '100%'
  }
}))





function Articles() {

  const navigate = useNavigate();

  const [articles, setArticle] = useState([]);

  const styles = useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  }

  const article = {
    title: 'Sustentación',
    author: 'Aurelio Rivas - John Sanabria',
    description: 'Esta tesis se basa en la inspección de los sistemas distribuidos dentro de un entorno de trabajo controlado',
    link: 'http://eisc.univalle.edu.co/index.php/laboratorios/redes-y-sistemas-distribuidos',
    categorie: 'tesis',
    view: true,
  }

  const [viewState, setViewState] = useState(true);

  const getArticles = async () => {
    const { data } = await Axios.post('');
  }

  return(
    <DashboardLayout>
      <DashboardNavbar />
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
                        <Box>
                          <Typography
                            color='error'
                            fontSize={30} fontWeight={100}
                          >
                            <strong>Titulo:</strong>
                            {` ${article.title}`}
                          </Typography>
                          <Typography
                            fontSize={20}
                            fontWeight={100}
                            color='black'>
                            <strong>Categoria:</strong>
                            {` ${article.categorie}`}
                          </Typography>
                        </Box>
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
                        <Box sx={{ display: 'flex', p: 2, justifyContent: 'flex-end' }}>
                          <MDButton
                            variant="outlined"
                            sx={{ mr: 2 }}
                            color='secondary'
                            onClick={() => setViewState(!viewState)}
                          >
                            <Typography color='secondary' fontSize={12} fontWeight={700}>
                              {viewState ? 'Activar' : 'Desactivar'}
                            </Typography>
                          </MDButton>
                          <MDButton
                            variant="outlined"
                            color="dark"
                            sx={{ mr: 2 }}
                            onClick={() => navigate('./edit')}
                          >
                            <Icon>
                              edit
                            </Icon>&nbsp;editar
                          </MDButton>
                          <MDButton onClick={() => abrirCerrarModal()} variant="outlined" color="primary">
                            <Icon>delete</Icon>&nbsp;borrar
                          </MDButton>
                          <div>
                            <Modal
                              open={modal}
                              onClose={abrirCerrarModal}>
                              <div className={styles.modal}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                 ATENCIÓN
                                </Typography>
                                <Typography id="modal-modal-description" >
                                  El artículo ha sido eliminado
                                </Typography>
                              </div>
                            </Modal>
                          </div>
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

export default Articles;