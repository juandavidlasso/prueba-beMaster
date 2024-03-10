import React from "react";
import {
    Avatar,
    Box,
    Button,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { UserState } from "../../models/user";
import { useLoginHook } from "./hooks/useLoginHook";

interface Props {}

const Login: React.FC<Props> = () => {
    const { validateSchema, submitUser } = useLoginHook();
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm<UserState>({
        mode: "onBlur",
        resolver: yupResolver(validateSchema),
    });
    return (
        <Grid container component='main' sx={{ height: "100vh" }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage:
                        "url(https://cdn.bemaster.com/media/images/login/Logo2-BeMaster-26.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                        t.palette.mode === "light"
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                }}
            />
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Iniciar Sesión
                    </Typography>
                    <form
                        onSubmit={handleSubmit(submitUser)}
                        style={{ width: "100%" }}
                    >
                        <TextField
                            margin='normal'
                            {...register("email")}
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoFocus
                            helperText={errors.email?.message}
                            error={!!errors.email}
                        />
                        <TextField
                            margin='normal'
                            {...register("password")}
                            fullWidth
                            name='password'
                            label='Contraseña'
                            type='password'
                            id='password'
                            helperText={errors.password?.message}
                            error={!!errors.password}
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!isValid}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
