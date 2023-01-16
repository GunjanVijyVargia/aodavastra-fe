import React, { useState } from "react";
import {
    Button, FormControl, TextField, InputLabel, Box, Container, Grid,
    OutlinedInput, InputAdornment, IconButton, Checkbox, FormHelperText, Stack, Typography
} from "@mui/material";
import Layout from "../Layout";
import theme from '../../Assets/Styles/theme';

const AddedToCart = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: '8pc',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",

                }}
            >
                <Stack
                    sx={{
                        width: "80%",
                        // maxWidth: "1280px",
                    }}
                >
                    <Grid container >
                        <Grid item lg={7}>dds</Grid>
                        <Grid item lg={5}>
                            <Typography border={1} sx={{ color: theme.lightBlack, fontSize: '36px' }}>American Diamond Bangles</Typography>
                            <Typography>Sold by- Drapes by Rashmi</Typography>
                            <Typography>A₹ 999.00</Typography>
                            <Grid container>
                                <Grid item lg={2}>dds</Grid>
                                <Grid item lg={2}>dds</Grid>
                                <Grid item lg={2}>dds</Grid>
                                <Grid item lg={2}>dds</Grid>
                                <Grid item lg={2}>dds</Grid>
                                <Grid item lg={2}>dds</Grid>
                                <Typography>Size Chart</Typography>

                            </Grid>
                            <Typography>SSpecifications</Typography>
                            <Typography>Classical Silk Sarees</Typography>
                            <Typography>Description</Typography>
                            <Typography>Keep the allure of traditional artistry alive and ablaze with these ornately crafted stud earrings.
                                This pair is the perfect match to your heirloom sarees.</Typography>
                            <Box>
                                <Button>Enter Pincode</Button>
                                <Button>Check Availability</Button>
                            </Box>
                        </Grid>


                    </Grid>
                    <Grid container >
                        <Typography>You may also like</Typography>
                        <Grid item lg={12}>ds</Grid>
                    </Grid>
                </Stack>
            </Box>
        </>
    );
};

export default Layout(AddedToCart)