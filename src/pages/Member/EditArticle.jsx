import React, { useState, useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MKInput from "components/MKInput";

import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, FormControl, InputLabel, Select, MenuItem, Switch } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "utils/axios";


const yupSchema = Yup.object({
    title: Yup.string().required(),
    author: Yup.string().required(),
    abstract: Yup.string().required(),
    link: Yup.string().required(),
    enable: Yup.boolean().required(),
})


const initialValues  = {
    titulo: "Tesis",
    autores: "Jhon Sanabria",
    resumen: "Es siguiente articulo se basa en la creación del laboratorio",
    link: "www.eisc.univalle.edu.co",
    categoria: "Linux",
    habilitar: "1",
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


function EditArticle() {

    const params = useLocation();

    const {id} = params.state

    const [titulo, setTitulo] = useState('')
    const [autores, setAutores] = useState('')
    const [resumen, setResumen] = useState('')
    const [link, setLink] = useState('')
    const [habilitar, sethabilitar] = useState('1')
    const [categoria, setCategorie] = useState('');

    const [cambiado, setCambiado] = useState(false);

    const setArticles = async() =>{
        const data = await axios.post(`/api/editArticle/${id}`,{
            titulo,
            autores,
            resumen,
            link,
            categoria,
            habilitar
        })
        console.log(data)
        console.log(params)
        console.log(id)
    }

    // useEffect( () => (
    //     setArticles()
    // ),[])

    const onSubmit = async (values, { setSubmitting }) => {
        await axios.post(`/api/articulos/${id}`, {categorie: categoria,...values })
        setSubmitting(false);
        setCambiado(true)

        cambiado ? navigate('/admin/articles') : null
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
                                        EDITAR ARTÍCULO
                                    </Typography>
                                    <Typography variant='caption' className='css-17vat79'>
                                        Ingrese la informacion que desea cambiar
                                    </Typography>
                                </Box>
                            </Box>


                            <Box p={2}>
                                <Formik
                                >
                                    <Form>
                                        <Box display='flex' flexDirection='column' pb={3} >  
                                            <TextInput label='Titulo' name='titulo' key='titulo' type='text'onChange={(event) =>{setTitulo(event.target.value)}}/>
                                            <TextInput label='Autores' name='autores' key='autores' type='text'onChange={(event) =>{setAutores(event.target.value)}}/>
                                            <TextInput label='Resumen' name='resumen' key='resumen' type='text' multiline rows={5}onChange={(event) =>{setResumen(event.target.value)}}/>
                                            <TextInput label='Link' name='link' key='link' type='text'onChange={(event) =>{setLink(event.target.value)}}/>
                                            
                                        </Box>

                                        <Box m={2} className='row-span-1'>
                                          <FormControl fullWidth>
                                            <InputLabel id="listar-categoria">categoria</InputLabel>
                                            <Select
                                              labelId="listar-categoria"
                                              id="listar-categoria-select"
                                              value={categoria}
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
                                            <Button variant="contained" endIcon={<SendIcon />} color='success' onClick={setArticles}>
                                              Guardar
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

export default EditArticle;