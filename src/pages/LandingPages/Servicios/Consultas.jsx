import React, { useState } from "react";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import SignIn from "layouts/pages/authentication/sign-in";

// Routes
import routes from "routes/pages.routes";
import footerRoutes from "routes/footer.routes";

//Template
import MKInput from "components/MKInput";

//Firebase-login
import { useNavigate } from "react-router-dom";

//Material-UI
import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, Accordion, AccordionSummary, AccordionDetails, InputLabel, Select, MenuItem, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <>
      <Box mb={0.5} ml={0.5} color='rgb(52, 71, 103)'>
        <Typography variant="h6" display='inline-block' fontWeight={700}>{label}</Typography>
      </Box>
      <MKInput className="text-input" {...field} {...props} />
    </>
  )
}

function Consultas() {

  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(null);

  //Usuario
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [fecha, setFecha] = useState('');
  const [temaAsesoria, setTemaAsesoria] = useState('');
  const [cualTema, setCualTema] = useState('');
  const [asesorIntegrante, setAsesorIntegrante] = useState('');
  const [califApoyo, setCalifApoyo] = useState('');
  const [califEspacioTrabajo, setCalifEspacioTrabajo] = useState('');
  const [comentario, setComentario] = useState('');

  const handleTemaAsesoria = (event) => {
    setTemaAsesoria(event.target.value);
  }
  const handleAsesorIntegrante = (event) => {
    setAsesorIntegrante(event.target.value);
  }

  const handleCalifApoyo = (event) => {
    setCalifApoyo(event.target.value);
  }

  const handleCalifEspacioTrabajo = (event) => {
    setCalifEspacioTrabajo(event.target.value);
  }
 
  
  return (
    <>
      <MKBox variant="gradient" bgColor="error" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "internal",
            route: "/login",
            component: <SignIn />,
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

      <MKBox>
        <Grid container justifyContent='center'>
          <Grid item md={12} lg={10} pt={10}>
            <Card>

              <Box xs={12} p={2} textAlign='center'>
                <Box display='flex' flexDirection='column' pb={3}>
                  <Typography variant="h3" fontWeight={700}>
                    Retroalimentación
                  </Typography>
                  <Typography variant='caption' className='css-17vat79'>
                    ¡Dejanos tu opinion!
                  </Typography>
                </Box>
              </Box>

              <Box p={2}>
                <Formik
                >
                  <Form>
                    <Box display='flex' flexDirection='column' pb={2}>
                      <TextInput label='Nombre completo' name='nombreCompleto' key='nombreCompleto' type='text'  variant="standard"  onChange={(event) => { setNombreCompleto(event.target.value) }} />
                     </Box>
                    <Box display='flex' flexDirection='column' pb={3}>
                      <TextInput label='Fecha de tu visita' name='fecha' key='fecha' type='text'  variant="standard"  onChange={(event) => { setFecha(event.target.value) }} />
                    </Box>

                    <Box m={0} className='row-span-1' pb={3}>
                      <FormControl fullWidth>
                        <Typography variant="h6" fontWeight={700}>
                          ¿Cuál fué el tema de la asesoria?
                        </Typography>
                        <InputLabel id="listar-temaAsesoria"></InputLabel>
                        <Select
                          labelId="listar-temaAsesoria"
                          id="listar-temaAsesoria-select"
                          value={temaAsesoria}
                          label="temaAsesoria"
                          onChange={handleTemaAsesoria}
                        >
                          <MenuItem key='redes' value='redes'>Redes</MenuItem>
                          <MenuItem key='sistemasDistribuidos' value='sistemasDistribuidos'>Sistemas distribuidos</MenuItem>
                          <MenuItem key='linux' value='linux'>Linux</MenuItem>
                          <MenuItem key='ciberseguridad' value='ciberseguridad'>Ciberseguridad</MenuItem>
                          <MenuItem key='otro' value='otro'>Otro</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box display='flex' flexDirection='column' pb={4}>
                    <TextInput label='En caso de ser otro ¿Cuál?' name='cualTema' key='cualTema' type='text'  variant="standard"  onChange={(event) => { setCualTema(event.target.value) }} />
                    </Box>

                    <Box m={0} className='row-span-1' pb={4}>
                      <FormControl fullWidth  >
                        <Typography variant="h6" fontWeight={700}>
                          ¿Quién te ayudo?
                        </Typography>
                        <InputLabel id="listar-asesorIntegrante"></InputLabel>
                        <Select
                          labelId="listar-asesorIntegrante"
                          id="listar-asesorIntegrante-select"
                          value={asesorIntegrante}
                          label="asesorIntegrante"
                          onChange={handleAsesorIntegrante}
                        >
                          <MenuItem key='asesor1' value='asesor1'>Juan Rodriguez</MenuItem>
                          <MenuItem key='asesor2' value='asesor2'>Wilmer Cantillo</MenuItem>
                          <MenuItem key='asesor3' value='asesor3'>Christian Paez</MenuItem>
                          <MenuItem key='asesor4' value='asesor5'>Maria Perez</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box m={0} className='row-span-1' pb={4}>
                      <FormControl fullWidth > 
                        <Typography variant="h6" fontWeight={700}>
                          ¿Que tan pertinente fué el apoyo?, califique de 1 a 5
                        </Typography>
                        <InputLabel id="listar-califApoyo"></InputLabel>
                        <Select
                          labelId="listar-califApoyo"
                          id="listar-califApoyo-select"
                          value={califApoyo}
                          label="califApoyo"
                          onChange={handleCalifApoyo}
                        >
                          <MenuItem key='1' value='1'>1</MenuItem>
                          <MenuItem key='2' value='2'>2</MenuItem>
                          <MenuItem key='3' value='3'>3</MenuItem>
                          <MenuItem key='4' value='4'>4</MenuItem>
                          <MenuItem key='5' value='5'>5</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box m={0} className='row-span-1' pb={4}>
                      <FormControl fullWidth> 
                        <Typography variant="h6" fontWeight={700}>
                          ¿Cómo le pareció el espacio y los implementos del laboratorio?
                        </Typography>
                        <InputLabel id="listar-califEspacioTrabajo"></InputLabel>
                        <Select
                          labelId="listar-califEspacioTrabajo"
                          id="listar-califEspacioTrabajo-select"
                          value={califEspacioTrabajo}
                          label="califEspacioTrabajo"
                          onChange={handleCalifEspacioTrabajo}
                        >
                          <MenuItem key='1' value='1'>Adecuado</MenuItem>
                          <MenuItem key='2' value='2'>Aceptable</MenuItem>
                          <MenuItem key='3' value='3'>Inadecuado</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box display='flex' flexDirection='column' pb={5}>
                      <TextInput label='¿Qué podríamos mejorar? (opiniones, comentarios, peticiones)' name='comentario' key='comentario' type='text'  variant="standard"  onChange={(event) => { setComentario(event.target.value) }} />
                    </Box>

                    <Box textAlign='center' pb={3}>
                      <Button variant="contained" endIcon={<SendIcon />} color="error">
                        Reservar
                      </Button>
                    </Box>
                  </Form>
                </Formik>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Consultas;