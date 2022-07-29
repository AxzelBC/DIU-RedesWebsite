import React, { useState } from "react";
import axios from "utils/axios";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MKInput from "components/MKInput";

import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, InputLabel, Select, MenuItem, Switch } from "@mui/material";
import { ViewKanban } from "@mui/icons-material";


const yupSchema = Yup.object({
    title: Yup.string().required(),
    author: Yup.string().required(),
    abstract: Yup.string().required(),
    link: Yup.string().required(),
    enable: Yup.boolean().required(),
})


const initialValues  = {
    title: "",
    author: "",
    abstract: "",
    link: "",
    enable: true,
    category: ""
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

    const onSubmit = async (values) => {
        const articulo = {
            titulo: values.title,
            autores: values.author,
            resumen: values.abstract,
            link: values.link,
            categoria: values.category,
        };
        const response = await axios.post('/api/articulos', articulo,
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
          );
        console.log(response)
          alert("Articulo creado!");

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
                                onSubmit= {values => {
                                    onSubmit(values);
                                }}

                                >

                                {({
                                        setFieldValue
                                    }) => (
                                
                                    <Form>
                                        <Box display='flex' flexDirection='column' pb={3}>  
                                            <TextInput label='Titulo' name='title' key='titulo' type='text'/>
                                            <TextInput label='Autores' name='author' key='autores' type='text'/>
                                            <TextInput label='Resumen' name='abstract' key='resumen' type='text' multiline rows={5}/>
                                            <TextInput label='Link' name='link' key='enlace' type='text'/>
                                            
                                        </Box>

                                        <Box className='row-span-1' pb={3}>
                                          <FormControl fullWidth>
                                            <InputLabel id="listar-categoria">categoria</InputLabel>
                                            <Select
                                              labelId="listar-categoria"
                                              id={"category"}
                                              label="categoria"
                                              name="category"
                                              value={categorie}
                                              onChange={e => {handleCategorie(e); setFieldValue("category", e.target.value)}}
                                            >
                                                <MenuItem key='articulos' value='articulo'>Articulo</MenuItem>
                                                <MenuItem key='tesis' value='tesis'>Tesis</MenuItem>
                                                <MenuItem key='poster' value='poster'>Poster</MenuItem>
                                                <MenuItem key='otros' value='otro'>Otros</MenuItem>
                                            </Select>
                                          </FormControl>
                                        </Box>

                                        <Box mb={3}>
                                            <FormControlLabel control={<Switch checked={initialValues.enable} color="secondary"/>} label="Habilitar" />
                                        </Box>
                                        <Box textAlign='center'>
                                            <Button variant="contained" endIcon={<SendIcon />} type='submit' color='success'>
                                              Crear
                                            </Button>
                                        </Box>
                                    </Form>)}
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