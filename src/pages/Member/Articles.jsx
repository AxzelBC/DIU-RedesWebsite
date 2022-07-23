import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "utils/axios";

import { Box, Grid, Card, Typography as Typography, Accordion, AccordionSummary, AccordionDetails, Button, Icon } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MDButton from 'components/MDButton/index'

function LoadArticles(){

  const navigate = useNavigate();

  const [viewState, setViewState] = useState(true);
  const [articles, setArticle] = useState([])

  const getArticles = async() =>{
    const {data} = await axios.get('/traerArticulos');
    setArticle(data);
    console.log(data)
  }

  useEffect( () => (
    getArticles()
  ),[]);

  return(
    <>
      {
        articles.map( (article) => (
          <div key={article.id_articulo}>
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
                    {` ${article.titulo}`}
                  </Typography>
                  <Typography 
                    fontSize={20} 
                    fontWeight={100} 
                    color='black'>
                    <strong>Categoria:</strong>
                    {` ${article.categoria}`}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
              {/* Author */}
                <Typography variant='h5'>
                  {article.autores}
                </Typography>
              {/* Descripción */}
                <Typography variant='body2'>
                {article.resumen}.
                </Typography>
              {/* Enlace */}
              <Box sx={{display: 'flex' , p: 2, justifyContent: 'flex-end'}}>
                <MDButton
                  variant="outlined"
                  sx={{mr: 2}}
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
                    sx={{mr: 2}}
                    onClick={() => navigate('./edit')}
                    >
                    <Icon>
                        edit
                      </Icon>&nbsp;editar
                  </MDButton>
                  <MDButton variant="outlined" color="primary">
                    <Icon>delete</Icon>&nbsp;borrar
                  </MDButton>
              </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      }
    </>
  )
}


function Articles() {

  const getArticles = async() =>{
    const {data} = await axios.get('/traerArticulos');
    console.log(data)
  }

  useEffect( () => (
    getArticles()
  ),[]);

  const navigate = useNavigate();

  const article = {
    title: 'Sustentación',
    author: 'Aurelio Rivas - John Sanabria',
    description: 'Esta tesis se basa en la inspección de los sistemas distribuidos dentro de un entorno de trabajo controlado',
    link: 'http://eisc.univalle.edu.co/index.php/laboratorios/redes-y-sistemas-distribuidos',
    categorie: 'tesis',
    view: true,
  }

  const [viewState, setViewState] = useState(true);


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


                                <LoadArticles/>



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