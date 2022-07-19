import React, { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MKInput from "components/MKInput";

import * as Yup from 'yup'
import Box from "@mui/material/Box";
import { Formik, Form, useField } from "formik";
import SendIcon from '@mui/icons-material/Send';
import { Grid, Card, Typography, Button, FormControlLabel, Switch } from "@mui/material";
import axios from "axios";


const yupSchema = Yup.object({
    id: Yup.number().required(),
    procesador: Yup.string().required(),
    Ram: Yup.number().required(),
    rom: Yup.string().required(),
    descripcion: Yup.string().required(),
    enable: Yup.bool().required(),
})


const initialValues = {
    id: 1,
    procesador: 'Intel Core i7',
    Ram: 4,
    rom: "500GB",
    descripcion: "Es un computador hecho para correr distros fuertes",
    enable: true,
}


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

function NewInventary() {

    const [procesador, setProcesador] = useState('');
    const [ram, setRam] = useState('');
    const [rom, setRom] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [enable, setEnable] = useState('');

    const onSubmit = async (values, { setSubmitting }) => {

        //await axios.post('/api/users/', { action: 'create', ...values })
        try {
            const answer = await axios.post("http://localhost:3001/newInventary", {
                body: {
                    procesador: procesador,
                    ram: ram,
                    rom: rom,
                    descripcion: descripcion,
                    enable: enable
                }
            }
            )
        }
        catch (error) {

        }
        setSubmitting(false);
    }

    return (
        <DashboardLayout>
            Crear el inventario de un equipo
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={10} pt={10}>
                        <Card>

                            <Box xs={12} p={2} textAlign='center'>
                                <Box display='flex' flexDirection='column' pb={3}>
                                    <Typography variant="h3" fontWeight={700}>
                                        AÑADIR COMPUTADOR
                                    </Typography>
                                    <Typography variant='caption' className='css-17vat79'>
                                        Ingrese la informacion solicitada para poder añadir un computador
                                    </Typography>
                                </Box>
                            </Box>


                            <Box p={2}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={yupSchema}
                                /*onSubmit={onSubmit} */
                                >
                                    <Form>
                                        <Box display='flex' flexDirection='column' pb={3}>
                                            <TextInput label='Procesador' name='procesador' key='procesador' type='text' onChange={(ev) => {setProcesador(ev.target.value)}}/>
                                            <TextInput label='RAM' name='ram' key='ram' onChange={(ev) => {setRam(ev.target.value)}}/>
                                            <TextInput label='Descripción' name='descripcion' key='descripcion' type='text' multiline rows={5} onChange={(ev) => {setDescripcion(ev.target.value)}}/>
                                            <TextInput label='Disco Duro' name='rom' key='rom' type='text' onChange={(ev) => {setRom(ev.target.value)}}/>
                                        </Box>
                                        <Box mb={3}>
                                            <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Habilitar" />
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

export default NewInventary;