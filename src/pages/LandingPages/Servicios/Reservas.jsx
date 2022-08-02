import React, { useState } from "react";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
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

function Reservas() {

  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(null);

  //Usuario
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [programaAcademico, setProgramaAcademico] = useState('');
  const [pc, setPC] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  

  const handleProgramaAcademico = (event) => {
    setProgramaAcademico(event.target.value);
  }
  const handlePC = (event) => {
    setPC(event.target.value);
  }
  const handleFecha = (event) => {
    setFecha(event.target.value);
  }
  const handleHora = (event) => {
    setHora(event.target.value);
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
                    Reserva de equipos de computo
                  </Typography>
                  <Typography variant='caption' className='css-17vat79'>
                    Ingrese la información solicitada al siguiente formulario para reservar un equipo
                  </Typography>
                </Box>
              </Box>

              <Box p={2}>
                <Formik
                >
                  <Form>
                    <Box display='flex' flexDirection='column' pb={2}>
                      <TextInput label='NombreCompleto' name='nombreCompleto' key='nombreCompleto' type='text' onChange={(event) => { setNombreCompleto(event.target.value) }} />
                      <TextInput label='Email' name='email' key='email' type='text' onChange={(event) => { setEmail(event.target.value) }} />
                    </Box>

                    <Box m={0} className='row-span-1' pb={3}>
                      <FormControl fullWidth>
                        <Typography variant="h6" fontWeight={700}>
                          Seleccione su programa academico
                        </Typography>
                        <InputLabel id="listar-programaAcademico"></InputLabel>
                        <Select
                          labelId="listar-programaAcademico"
                          id="listar-programaAcademico-select"
                          value={programaAcademico}
                          label="programaAcademico"
                          onChange={handleProgramaAcademico}
                        >
                          <MenuItem key='2711' value='2711'>2711  Tecnologia en sistemas de información</MenuItem>
                          <MenuItem key='2724' value='2724'>2724  Tecnología en desarrollo de software</MenuItem>
                          <MenuItem key='3743' value='3743'>3743  Ingeniería de sistemas</MenuItem>
                          <MenuItem key='3744' value='3744'>3744  Ingenieria electronica</MenuItem>
                          <MenuItem key='7721' value='7721'>7721  Maestria</MenuItem>
                          <MenuItem key='9702' value='9702'>9702  Doctorado</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box m={0} className='row-span-1' pb={3}>
                      <FormControl fullWidth>
                        <Typography variant="h6" fontWeight={700}>
                          Seleccione un equipo de computo
                        </Typography>
                        <InputLabel id="listar-PC"></InputLabel>
                        <Select
                          labelId="listar-PC"
                          id="listar-PC-select"
                          value={pc}
                          label="pc"
                          onChange={handlePC}
                        >
                          <MenuItem key='PC1' value='PC1'>Computador #1</MenuItem>
                          <MenuItem key='PC3' value='PC3'>Computador #3</MenuItem>
                          <MenuItem key='PC4' value='PC4'>Computador #4</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box m={0} className='row-span-1' pb={3}>
                      <FormControl fullWidth>
                        <Typography variant="h6" fontWeight={700}>
                          Seleccione una fecha 
                        </Typography>
                        <InputLabel id="listar-fechas"></InputLabel>
                        <Select
                          labelId="listar-fecha"
                          id="listar-fecha-select"
                          value={fecha}
                          label="fecha"
                          onChange={handleFecha}
                        >
                          <MenuItem key='fecha1' value='fecha1'>8-Agosto-2022</MenuItem>
                          <MenuItem key='fecha2' value='fecha2'>9-Agosto-2022</MenuItem>
                          <MenuItem key='fecha3' value='fecha3'>10-Agosto-2022</MenuItem>
                          <MenuItem key='fecha4' value='fecha4'>11-Agosto-2022</MenuItem>
                          <MenuItem key='fecha5' value='fecha5'>12-Agosto-2022</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>

                    <Box m={0} className='row-span-1' pb={3}>
                      <FormControl fullWidth>
                        <Typography variant="h6" fontWeight={700}>
                          Seleccione una hora 
                        </Typography>
                        <InputLabel id="listar-hora"></InputLabel>
                        <Select
                          labelId="listar-hora"
                          id="listar-hora-select"
                          value={hora}
                          label="hora"
                          onChange={handleHora}
                        >
                          <MenuItem key='9AM' value='9AM'>9:00 AM</MenuItem>
                          <MenuItem key='10AM' value='10A'>10:00 AM</MenuItem>
                          <MenuItem key='11AM' value='11AM'>11:00 AM</MenuItem>
                          <MenuItem key='2PM' value='2PM'>2:00 PM</MenuItem>
                          <MenuItem key='3PM' value='3PM'>3:00 PM</MenuItem>
                          <MenuItem key='4PM' value='4PM'>4:00 PM</MenuItem>
                          <MenuItem key='5PM' value='5PM'>5:00 PM</MenuItem>
                        </Select>
                      </FormControl>
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


      <Box>
        <Grid container justifyContent='center'>
          <Grid item md={12} lg={10} pt={10}>
            <Card>
              <Box>
                <Box xs={12} p={2} textAlign='center'>
                  <Box display='flex' flexDirection='column' pb={3}>
                    <Typography variant="h3" color='black' fontWeight={700}>
                      Equipos disponibles
                    </Typography>
                    <Typography variant='caption' className='css-17vat79'>
                    Aqui puede ver el istado de los equipos del laboratorio y sus características
                  </Typography>
                  </Box>
                </Box>
                <Box>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" >
                        {/* Numero de computador*/}
                        <Typography variant='h4' color='black' textTransform='uppercase'>
                          Computador #1
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {/* Sistema operativo*/}
                        <Typography variant='body2'>
                          <strong> Sistema operativo:</strong><br />
                          Linux-Ubuntu
                        </Typography>
                        {/* Procesador*/}
                        <Typography variant='body2'>
                          <strong> Procesador:</strong><br />
                          Intel Core i7
                        </Typography>
                        {/* Ram*/}
                        <Typography variant='body2' color='grey'>
                          <strong>Memoria RAM:</strong><br />
                          8 GB
                        </Typography>
                        {/* Disco duro */}
                        <Typography variant='body2'>
                          <strong>Disco Duro:</strong><br />
                          500 GB a 5,400 RPM
                        </Typography>
                         {/* Caracteristicas adicionales */}
                        <Typography variant='body2'>
                          <strong>Características adicionales:</strong><br />
                          Tiene dos pantallas conectadas
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" >
                        {/* Numero de computador*/}
                        <Typography variant='h4' color='black' textTransform='uppercase'>
                          Computador #3
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {/* Sistema operativo*/}
                        <Typography variant='body2'>
                          <strong> Sistema operativo:</strong><br />
                          Linux-Mint
                        </Typography>
                        {/* Procesador*/}
                        <Typography variant='body2'>
                          <strong> Procesador:</strong><br />
                          Intel Core i5 8th Gen
                        </Typography>
                        {/* Ram*/}
                        <Typography variant='body2' color='grey'>
                          <strong>Memoria RAM:</strong><br />
                          8 GB
                        </Typography>
                        {/* Disco duro */}
                        <Typography variant='body2'>
                          <strong>Disco Duro:</strong><br />
                          1000 GB 
                        </Typography>
                         {/* Caracteristicas adicionales */}
                        <Typography variant='body2'>
                          <strong>Características adicionales:</strong><br />
                          No tiene mouse
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

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Reservas;