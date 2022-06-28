import React, { useState } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MKInput from "components/MKInput";

import Box from "@mui/material/Box";
import { Grid, Card, Typography } from "@mui/material";
import { Formik, Form, useField } from "formik";

const TextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return(
        <>
            <Box mb={0.5} ml={0.5} color='rgb(52, 71, 103)'>
                <Typography variant="h6" fontWeight={700}>{label}</Typography>
            </Box>
            <MKInput className="text-input" {...field} {...props}/>
        </>
    )
}

function NewArticle() {
    return(
        <DashboardLayout>
            <Box>
                <Grid container justifyContent='center'>
                    <Grid item md={12} lg={5} pt={4}>
                        <Card>

                            <Box p={2} textAlign='center'>
                                <Box display='flex' flexDirection='column' pb={3}>
                                    <Typography variant="h3" fontWeight={700}>
                                        Crear Artículo
                                    </Typography>
                                    <Typography variant='caption' className='css-17vat79'>
                                        Ingrese la informacion solicitada para poder crear un artículo
                                    </Typography>
                                </Box>
                            </Box>

                            <Box p={4}>
                                <Formik>
                                    <Form>
                                        <Grid container spacing={3} columnSpacing={3} rowSpacing={1}>
                                            <Grid item>
                                                <TextInput label='Titulo' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput label='Autores' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput label='Resumen' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput label='Link' />
                                            </Grid>
                                        </Grid>
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