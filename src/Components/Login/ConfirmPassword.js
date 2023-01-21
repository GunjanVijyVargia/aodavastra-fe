import React, { useState } from "react";
import {
    Button, FormControl, TextField, InputLabel, Box, Container,
    OutlinedInput, InputAdornment, IconButton, Checkbox, FormHelperText
} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../../Assets/Images/project_logo_svg.svg";
import GoogleButton from "react-google-button";
import { useNavigate, useParams } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { AvForm, AvField } from 'availity-reactstrap-validation';
import { FlexCenterColumn, PrimaryButton } from "../../Utils/Common/component";
import HttpService from "../../Services/Http.service";
import { toast } from "react-toastify";
import { api_base_url } from "../../Utils/Common/urls";
import '../index.scss'




const ConfirmPassword = () => {
    const navigate = useNavigate();
    let { token } = useParams();
    console.log(token)
    const [showPassword, setShowPassword] = useState({
        email: '',
        password: false,
    });

    const [userPayload, setPayload] = useState({
        password: '',
        email: '',
    })
    const [errors, setErrors] = useState({
        password: '',
        email: '',
    })

    const handleClickShowPassword = (key) => setShowPassword({ ...showPassword, [key]: !showPassword[key] });

    const handleChange = (e) => {
        setErrors({ ...errors, [e.target.name]: '' })
        setPayload({ ...userPayload, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userPayload?.password === '' || userPayload?.email === '') {
            if (userPayload?.password === '' && userPayload?.email === '') {
                setErrors({
                    password: 'Password is required field',
                    email: 'Email is required field'
                })
            }
            else {
                if (userPayload?.password === '') {
                    setErrors({ password: 'Password required field' })
                }
                else if (userPayload?.email === '') {
                    setErrors({ email: 'Email required field' })
                }
            }
        }
        else {
            try {
                const payload = {
                    ...userPayload,
                    passwordResetToken: token
                }
                const result = await HttpService.post(api_base_url + '/user/reset-password', payload);
                if (result.data && result.data.token) {
                    toast['success']('Password updated successfully!')
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000)
                }

            } catch (err) {
                if (!!err.response && err.response.data && err.response.data.error) {
                    const errArray = err.response && err.response.data && err.response.data.message
                    if (typeof (errArray) == 'string') {
                        toast['error'](errArray)
                    } else {
                        for (let error of errArray) {
                            toast['error'](error)
                        }
                    }

                }
            }
        }
    };

    return (
        <>
            <Grid container
                sx={{ mt: 0, paddingLeft: 0, height: { lg: '100vh', md: '100vh' }, flexDirection: { lg: 'row', md: 'row', sm: 'column' } }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
                    className="logo_container" sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end', } }}
                >
                    <Box
                        sx={{ paddingRight: { lg: '50px' }, width: '320px', height: '127px', padding: { md: '0px', sm: '50px', xs: '10px' } }}
                        component="img"
                        className=""
                        alt="The MODA VASTRA Logo"
                        src={logo}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                    display: 'flex', alignItems: 'center'
                }}>
                    <Container component="main" maxWidth="xs">
                        <FlexCenterColumn>
                            <Box>
                                <OutlinedInput
                                    type="email" placeholder="E-mail"
                                    name="email" size="small" className="mt-12"
                                    fullWidth error={Boolean(errors?.email)}
                                    inputProps={{
                                        sx: {
                                            "&::placeholder": {
                                                opacity: 0.8,
                                                fontSize: "18px",
                                            },
                                        },
                                    }}
                                    onChange={handleChange}
                                />
                                {errors && (
                                    <FormHelperText htmlFor="form-selector" error={!!errors.email}>
                                        {errors.email}
                                    </FormHelperText>
                                )}
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        size="small" fullWidth
                                        inputProps={{
                                            sx: {
                                                "&::placeholder": {
                                                    opacity: 0.8,
                                                    fontSize: "18px",
                                                },
                                            },
                                        }}
                                        className="mt-12" name='password'
                                        type={showPassword.password ? 'text' : 'password'}
                                        onChange={handleChange} placeholder="Password"
                                        error={Boolean(errors?.password)}
                                        helperText={errors?.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => handleClickShowPassword('password')}
                                                    onMouseDown={(e) => e.preventDefault()}
                                                    edge="end"
                                                >
                                                    {showPassword.password ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                {errors && (
                                    <FormHelperText htmlFor="form-selector" error={!!errors.password}>
                                        {errors.password}
                                    </FormHelperText>
                                )}
                                <FlexCenterColumn>
                                    <Grid item className="login_button" sx={{ mt: 5, width: '50%', margin: 'auto' }} onClick={handleSubmit}>Update Password</Grid>
                                </FlexCenterColumn>

                            </Box>
                        </FlexCenterColumn>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default ConfirmPassword