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

import {
    ProductHeading,
    BoldHeading,
    LightText, SemiLightText, PrimaryButton, RegularButton,PurpleTextLight,BoldText
} from '../../Utils/Common/component'


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
                    <Grid container  columnGap={3}>
                        <Grid item lg={5} >
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ width: '64px', height: '64px', marginRight: '20px', marginLeft: '19px' }}>
                                    <img onClick={() => setState(0)} src={bangleImg} alt='' style={{ width: '100%' }} />
                                    <img onClick={() => setState(1)} src={bangleImg} alt='' style={{ width: '100%' }} />
                                </Box>
                                <Box>
                                    <Box sx={{ width: '400px', height: '528px' }}>
                                        {state === 1 ? (
                                            <>
                                                <img src={Img} alt='' style={{ width: '100%', height: '100%' }} />
                                            </>
                                        ) : <>
                                            <img src={bangleImg} alt='' style={{ width: '100%', height: '100%' }} />
                                        </>}
                                    </Box>
                                    <Box display='block'>
                                        <RegularButton sx={{ width: '400px', height: '48px', borderRadius: '0px', textTransform: 'capitalize' }}><SemiLightText>Add to Bag</SemiLightText></RegularButton>
                                        <PrimaryButton fullWidth sx={{ width: '400px', height: '48px', borderRadius: 0 }} >Buy Now</PrimaryButton>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={5}>
                        <Box>       <ProductHeading >American Diamond Bangles</ProductHeading> </Box>
                            <Box>  <BoldText sx={{ color: theme.lightBlack, fontSize: '14px', lineHeight: '40px', textTransform: 'uppercase' }}>Sold by- <PurpleTextLight>Drapes by Rashmi</PurpleTextLight></BoldText></Box>
                            <Box>  <Typography sx={{ color: theme.lightBlack, fontSize: '28px', fontWeight: 600, lineHeight: '42px' }}>A₹ 999.00</Typography></Box>
                            <Grid container>
                                <Grid item lg={12}>
                                    <PurpleTextLight >Select Size</PurpleTextLight>
                                </Grid>
                                <Box sx={{ background: theme.Cosmos, width: '400px',height:'48px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>xs</LightText></Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>S</LightText></Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>m</LightText></Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>l</LightText></Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>xl</LightText></Button>
                                    </Grid>
                                    <Grid item lg={2}>
                                        <Button sx={{    textTransform: 'uppercase' }}><LightText>xxl</LightText></Button>
                                    </Grid>
                                </Box>
                                <Grid item lg={12}>
                                    <Typography sx={{ color: theme.primaryColor, fontSize: '14px', lineHeight: '21px', marginTop: '4px' }}>Size Chart</Typography>
                                </Grid>
                            </Grid>
                            <Box mt={1}>
                                <Box> <BoldHeading >Specifications</BoldHeading></Box>
                                <Box><LightText >Classical Silk Sarees</LightText></Box>
                            </Box>
                            <Box mt={1}>
                                <Box> <BoldHeading>Description</BoldHeading></Box>
                                <Box><LightText >Keep the allure of traditional artistry alive and ablaze with these ornately crafted stud earrings.
                                    This pair is the perfect match to your heirloom sarees.</LightText></Box>
                            </Box>
                            <Box mt={2}>
                                <Button sx={{ width: '200px', border: `1px solid ${theme.lightBlack}`, marginTop: '18px', borderRadius: '0px', textTransform: 'capitalize' }}><SemiLightText>Enter Pincode</SemiLightText></Button>
                                <Button sx={{ width: '200px', background: theme.primaryColor, marginTop: '18px', borderRadius: '0px', textTransform: 'capitalize', '&:hover': { background: theme.primaryColor } }}><SemiLightText>Check Availability</SemiLightText></Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 5 }}>
                        <BoldHeading >You may also like</BoldHeading>
                    </Box>
                    <Grid container columnSpacing={1} >
                        {_.times(5, (i) => (
                            <Grid item lg={2.3} >
                                <Box sx={{ width: '200px', height: '240px' }}>
                                    <img src={Img} alt='' style={{ width: '100%' }} />
                                    <LightText>Kundan Ring</LightText>
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