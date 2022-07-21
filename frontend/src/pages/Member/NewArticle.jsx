import React, { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MKInput from "components/MKInput";

import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, InputLabel, Select, MenuItem, Switch } from "@mui/material";


const yupSchema = Yup.object({
    title: Yup.string().required(),
    author: Yup.string().required(),
    abstract: Yup.string().required(),
    link: Yup.string().required(),
    enable: Yup.boolean().required(),
})


const initialValues  = {
    title: "Tesis",
    author: "Jhon Sanabria",
    abstract: "Es siguiente articulo se basa en la creación del laboratorio",
    link: "www.eisc.univalle.edu.co",
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


function NewArticle() {

    const [categorie, setCategorie] = useState('');

    const onSubmit = async (values, { setSubmitting }) => {
        
        //await axios.post('/api/users/', { action: 'create', ...values })
        setSubmitting(false);
    }

    const handleCategorie = (event) =>{
        setCategorie(event.target.value);
    }

    return(
        <DashboardLayout>
        <DashboardNavbar />
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
                        <Card>

                            <Box xs={12} p={2} textAlign='center'>
                                <Box display='flex' flexDirection='column' pb={3}>
                                    <Typography variant="h3" fontWeight={700}>
                                        NUEVO ARTÍCULO
                                    </Typography>
                                    <Typography variant='caption' className='css-17vat79'>
                                        Ingrese la informacion solicitada para poder crear un artículo
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
                                            <TextInput label='Titulo' name='title' key='titulo' type='text'/>
                                            <TextInput label='Autores' name='author' key='autores' type='text'/>
                                            <TextInput label='Resumen' name='abstract' key='resumen' type='text' multiline rows={5}/>
                                            <TextInput label='Link' name='link' key='enlace' type='text'/>
                                            
                                        </Box>

                                        <Box m={2} className='row-span-1'>
                                          <FormControl fullWidth>
                                            <InputLabel id="listar-categoria">categoria</InputLabel>
                                            <Select
                                              labelId="listar-categoria"
                                              id="listar-categoria-select"
                                              value={categorie}
                                              label="categoria"
                                              onChange={handleCategorie}
                                            >
                                                <MenuItem key='articulos' value='articulo'>Articulo</MenuItem>
                                                <MenuItem key='tesis' value='tesis'>Tesis</MenuItem>
                                                <MenuItem key='poster' value='poster'>Poster</MenuItem>
                                                <MenuItem key='otros' value='otro'>Otros</MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>

                                        <Box mb={3}>
                                            <FormControlLabel control={<Switch defaultChecked color="secondary"/>} label="Habilitar" />
                                        </Box>
                                        <Box textAlign='center'>
                                            <Button variant="contained" endIcon={<SendIcon />} type='submit' color='success'>
                                              Crear
                                            </Button>
                                        </Box>
                                    </Form>
                                </Formik>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>
    )
}

export default NewArticle;