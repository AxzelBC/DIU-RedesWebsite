import React, { useState } from "react";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import SignIn from "layouts/pages/authentication/sign-in";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MKInput from "components/MKInput";

import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, InputLabel, Select, MenuItem, Switch } from "@mui/material";


// Routes
import routes from "routes/pages.routes";
import footerRoutes from "routes/footer.routes";


const yupSchema = Yup.object({
  title: Yup.string().required(),
  author: Yup.string().required(),
  abstract: Yup.string().required(),
  link: Yup.string().required(),
  enable: Yup.boolean().required(),
})

const initialValues  = {
  nombre: "Rossy",
  apellido: "Romero",
  codEstudiante: "1925456",
  plan: "2711",
  usuario: "ruzbe",
  email: "ruz@correounivalle.edu.co",
  contraseña: "",
  celular: "312 204 5715",
  porque: "",
  enable: true
}

const TextInput = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return(
      <>
          <Box mb={0.5} ml={0.5} color='rgb(52, 71, 103)'>
              <Typography variant="h6" display='inline-block' fontWeight={700}>{label}</Typography>
          </Box>
          <MKInput className="text-input" {...field} {...props}/>
      </>
  )
}

function Unirse(){

  const [enfoque, setEnfoque] = useState('');

  const onSubmit = async (values, { setSubmitting }) => {
        
    //await axios.post('/api/users/', { action: 'create', ...values })
    setSubmitting(false);
}

const handleEnfoque = (event) =>{
    setEnfoque(event.target.value);
}

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

            <MKBox>
            
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
                        <Card>

                            <Box xs={12} p={2} textAlign='center'>
                                <Box display='flex' flexDirection='column' pb={3}>
                                    <Typography variant="h3" fontWeight={700}>
                                        Formulario para solicitar registro
                                    </Typography>
                                    <Typography variant='caption' className='css-17vat79'>
                                        Ingrese la informacion solicitada para poder enviar su solicitud
                                    </Typography>
                                </Box>
                            </Box>


                            <Box p={2}>
                                <Formik
                                initialValues={initialValues}
                                validationSchema={yupSchema}
                                >
                                    <Form>
                                        <Box display='flex' flexDirection='column' pb={3}>  
                                            <TextInput label='Nombre' name='nombre' key='nombre' type='text'/>
                                            <TextInput label='Apellido' name='apellido' key='apellido' type='text'/>
                                            <TextInput label='Codigo estudiante' name='codEstudiante' key='conEstudiante' type='text'/>
                                            <TextInput label='Plan academico' name='plan' key='plan' type='text'/>
                                            <TextInput label='Usuario' name='usuario' key='usuario' type='text'/>
                                            <TextInput label='Email' name='email' key='email' type='text'/>
                                            <TextInput label='Contraseña' name='contraseña' key='contraseña' type='text'/>
                                            <TextInput label='Celular' name='celular' key='celular' type='text'/>
                                            <TextInput label='¿Por qué esta interesado en pertenecer al laboratorio?' name='porque' key='porque' type='text' multiline rows={5}/>
                                            
                                            
                                        </Box>

                                        <Box m={1} className='row-span-1'>
                                          <FormControl fullWidth>
                                          <Typography variant="h6" fontWeight={700}>
                                          ¿En que le gustaria enfocarse?
                                    </Typography>
                                            <InputLabel id="listar-enfoque"></InputLabel>
                                            <Select
                                              labelId="listar-enfoque"
                                              id="listar-enfoque-select"
                                              value={enfoque}
                                              label="enfoque"
                                              onChange={handleEnfoque}
                                            >
                                                <MenuItem key='Redes' value='redes'>Redes</MenuItem>
                                                <MenuItem key='SistDistribuidos' value='SistDistribuidos'>Sistemas distribuidos</MenuItem>
                                                <MenuItem key='Linux' value='linux'>Linux</MenuItem>
                                                <MenuItem key='Otro' value='otro'>Otros</MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>

                                        <Box mb={0}>
                                        <TextInput label='En caso de elegir "otro" ¿Cuál seria?' name='cual' key='cual'  type='text'/>
                                        </Box>
                                        <Box textAlign='center'>
                                            <Button variant="contained" endIcon={<SendIcon />} type='submit' color="error">
                                              Enviar Solicitud
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

export default Unirse;