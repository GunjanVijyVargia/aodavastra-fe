import React, { useState } from "react";
import {
    Button, FormControl, TextField, InputLabel, Box, Container, Grid,
    OutlinedInput, InputAdornment, IconButton, Checkbox, FormHelperText, Stack, Typography
} from "@mui/material";
import Layout from "../Layout";
import theme from '../../Assets/Styles/theme';
import bangleImg from '../../Assets/Images/Rectangle 292 (1).png'
import Img from '../../Assets/Images/Rectangle 88.png'
import _ from 'lodash'
const AddedToCart = () => {
    const [state, setState] = useState(0)



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
                        <Grid item lg={5} >
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '64px', height: '64px', marginRight: '20px', marginLeft: '19px' }}>
                                    <img onClick={() => setState(0)} src={bangleImg} alt='' style={{ width: '100%' }} />
                                    <img onClick={() => setState(1)} src={bangleImg} alt='' style={{ width: '100%' }} />
                                </Box>
                                <Box>
                                    <Box sx={{ width: '350px', height: '450px' }}>
                                        {state === 1 ? (
                                            <>
                                                <img src={Img} alt='' style={{ width: '100%', height: '100%' }} />
                                            </>
                                        ) : <>
                                        <img src={bangleImg} alt='' style={{ width: '100%', height: '100%' }} />
                                        </>}
                                    </Box>
                                    <Box display='block'>
                                        <Button fullWidth sx={{ border: `1px solid ${theme.lightBlack}`, color: theme.lightBlack, marginTop: '18px', borderRadius: '0px', fontSize: '20px' }}>Add to Bag</Button>
                                        <Button fullWidth sx={{ background: theme.primaryColor, color: theme.white, marginTop: '18px', borderRadius: '0px', fontSize: '20px', '&:hover': { background: theme.primaryColor } }}>Buy Now</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={5}>
                            <Typography sx={{ color: theme.lightBlack, fontSize: '36px', fontWeight: 600, lineHeight: '54px' }}>American Diamond Bangles</Typography>
                            <Typography sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '40px', textTransform: 'uppercase' }}>Sold by- Drapes by Rashmi</Typography>
                            <Typography sx={{ color: theme.lightBlack, fontSize: '28px', fontWeight: 600, lineHeight: '42px' }}>A₹ 999.00</Typography>
                            <Grid container>
                                <Grid item lg={12}>
                                    <Typography sx={{ color: theme.lightBlack, fontSize: '22px', lineHeight: '42px' }}>Select Size</Typography>
                                </Grid>
                                <Box sx={{ background: theme.Cosmos, width: '400px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>xs</Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>S</Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>m</Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>l</Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>xl</Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '42px', textTransform: 'uppercase' }}>xxl</Button>
                                    </Grid>
                                </Box>
                                <Grid item lg={12}>
                                    <Typography sx={{ color: theme.primaryColor, fontSize: '14px', lineHeight: '21px', marginTop: '4px' }}>Size Chart</Typography>
                                </Grid>
                            </Grid>
                            <Box mt={1}>
                                <Typography sx={{ fontSize: '24px', color: theme.lightBlack, fontWeight: 500 }}>Specifications</Typography>
                                <Typography sx={{ fontSize: '16px', color: theme.lightBlack, fontWeight: 400, }}>Classical Silk Sarees</Typography>
                            </Box>
                            <Box mt={1}>
                                <Typography sx={{ fontSize: '24px', color: theme.lightBlack, fontWeight: 500, }}>Description</Typography>
                                <Typography sx={{ fontSize: '16px', color: theme.lightBlack, fontWeight: 400, lineHeight: '27px' }}>Keep the allure of traditional artistry alive and ablaze with these ornately crafted stud earrings.
                                    This pair is the perfect match to your heirloom sarees.</Typography>
                            </Box>
                            <Box >
                                <Button sx={{ width: '200px', border: `1px solid ${theme.lightBlack}`, color: '#3C3C3CB2', marginTop: '18px', borderRadius: '0px', fontSize: '16px', textTransform: 'capitalize' }}>Enter Pincode</Button>
                                <Button sx={{ width: '200px', background: theme.primaryColor, color: theme.lightBlack, marginTop: '18px', borderRadius: '0px', fontSize: '16px', textTransform: 'capitalize', '&:hover': { background: theme.primaryColor } }}>Check Availability</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box >
                        <Typography sx={{ fontSize: '24px', color: theme.lightBlack, mt: 1 }}>You may also like</Typography>
                    </Box>
                    <Grid container columnSpacing={1} >

                        {_.times(5, (i) => (
                            <Grid item lg={2.3} >
                                <Box sx={{ width: '200px', height: '240px' }}>
                                    <img src={Img} alt='' style={{ width: '100%' }} />
                                    <Typography>Kundan Ring</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Box>
        </>
    );
};

export default Layout(AddedToCart)