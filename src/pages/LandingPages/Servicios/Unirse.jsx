//React
import React, { useState } from "react";

//Template
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import SignIn from "layouts/pages/authentication/sign-in";
import MKInput from "components/MKInput";

//Material-UI
import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, InputLabel, Select, MenuItem,} from "@mui/material";

// Routes
import routes from "routes/pages.routes";
import footerRoutes from "routes/footer.routes";
import axios from "utils/axios";

//Firebase-login
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'utils/firebase';
import { useNavigate } from "react-router-dom";


const initialValues  = {
  nombre: "Alejandro",
  apellido: "Mosquera",
  codEstudiante: "2022499",
  plan: "2711",
  usuario: "Axzel",
  email: "cardona.alejandro@correounivalle.edu.co",
  contraseña: "Mosquera123",
  celular: "3188112557",
  porque: "Porque soy admin",
  cual: "Linux",
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
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState(null);

  const [enfoque, setEnfoque] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [codigo, setcodEstudiante] = useState('');
  const [plan, setPlan] = useState('');
  const [usuario, setUsuario] = useState('');
  //Usuario
  const [email, setEmail] = useState('');
  //Contraseña
  const [contraseña, setContraseña] = useState('');
  const [celular, setCelular] = useState('');
  const [porque, setPorque] = useState('');
  const [cual, setCual] = useState('');

  // console.log(enfoque)
  // console.log(nombre)
  // console.log(apellido)
  // console.log(codigo)
  // console.log(plan)
  // console.log(usuario)
  // console.log(email)
  // console.log(contraseña)
  // console.log(celular)
  // console.log(porque)
  // console.log(cual)
  const onSubmit = async () => {
        // try {
        //   const answer = await axios.post('http://localhost:3000/register', {
        //     headers:{
        //       'Content-Type': 'application/json',
        //       'Access-Control-Allow-Origin': '*'
        //     },
        //     body:{ 
        //       nombre: nombre,
        //       apellido: apellido,
        //       codigo_usuario: codigo,
        //       programa: plan,
        //       usuario: usuario,
        //       correo: email,
        //       password: contraseña,
        //       celular: celular,
        //       porque: porque
        //     }
        //   });
        //   console.log(answer)
        // }
        // catch (error){
        //   console.log("register error"+error.message)
        // }
    //await axios.post('/api/users/', { action: 'create', ...values })
  }

  const registrarUsuario = (e) =>{
    e.preventDefault();
    console.log('funciona')
    createUserWithEmailAndPassword(auth,email,contraseña)
        .then( r => {
            alert('¡Usuario Creado!')
        })
        //Firebase: Error (auth/invalid-email).
        //Firebase: Password should be at least 6 characters (auth/weak-password).
        .catch( e => {
            if (e.code === 'auth/invalid-email') {
                setMsgError('Formato de Email incorrecto');
                alert(msgError);
            }
            if (e.code === 'auth/weak-password') {
                setMsgError('Contraseña muy corta. Minimo 6 caracteres');
                alert(msgError);
            }
        })
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
                                >
                                    <Form>
                                        <Box display='flex' flexDirection='column' pb={3}>  
                                            <TextInput label='Nombre' name='nombre' key='nombre' type='text' onChange={(event) =>{setNombre(event.target.value)}}/>
                                            <TextInput label='Apellido' name='apellido' key='apellido' type='text' onChange={(event) =>{setApellido(event.target.value)}}/>
                                            <TextInput label='Codigo estudiante' name='codEstudiante' key='codEstudiante' type='text' onChange={(event) =>{setcodEstudiante(event.target.value)}}/>
                                            <TextInput label='Plan academico' name='plan' key='plan' type='text' onChange={(event) =>{setPlan(event.target.value)}}/>
                                            <TextInput label='Usuario' name='usuario' key='usuario' type='text' onChange={(event) =>{setUsuario(event.target.value)}}/>
                                            <TextInput label='Email' name='email' key='email' type='text' onChange={(event) =>{setEmail(event.target.value)}}/>
                                            <TextInput label='Contraseña' name='contraseña' key='contraseña' type='text' onChange={(event) =>{setContraseña(event.target.value)}}/>
                                            <TextInput label='Celular' name='celular' key='celular' type='text' onChange={(event) =>{setCelular(event.target.value)}}/>
                                            <TextInput label='¿Por qué esta interesado en pertenecer al laboratorio?' name='porque' key='porque' type='text' onChange={(event) =>{setPorque(event.target.value)}} multiline rows={5}/>
                                            <TextInput label='En caso de elegir "otro" ¿Cuál seria?' name='cual' key='cual' type='text' onChange={(event) =>{setCual(event.target.value)}}/>
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

                                        {/* <Box mb={0}>
                                         
                                        </Box> */}
                                        <Box textAlign='center'>
                                            <Button variant="contained" endIcon={<SendIcon />} color="error" onClick={registrarUsuario}>
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