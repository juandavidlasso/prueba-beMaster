import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import useAppSelector from "../../hooks/store/useAppSelector";
import { IRootState } from "../../models/store/core";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

interface Props {}

const ContentCategory: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { category } = useAppSelector(
        (state: IRootState) => state.registerReducer
    );
    const theme = sessionStorage.getItem("theme") || "light";
    return (
        <Box sx={{ width: "100%", padding: 3 }}>
            <Grid container sx={{ width: "100%" }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        marginBottom: { xs: "30px", sm: 0 },
                        display: { xs: "flex", sm: "block" },
                        justifyContent: { xs: "center" },
                    }}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => navigate("/home")}
                    >
                        <ArrowBackOutlinedIcon />
                        Atras
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 40,
                            textAlign: "center",
                            fontWeight: 700,
                        }}
                        color='text.primary'
                    >
                        {category.title}
                    </Typography>
                </Grid>
                <Grid
                    key={category.id}
                    item
                    xs={12}
                    sm={6}
                    sx={{ padding: { xs: 0, sm: 3 }, margin: "0 auto" }}
                >
                    <Card sx={{ width: "100%", borderRadius: 4 }}>
                        <CardHeader
                            title={
                                <Typography
                                    sx={{
                                        textTransform: "uppercase",
                                        fontSize: 15,
                                    }}
                                    color='text.primary'
                                >
                                    {category.title}
                                </Typography>
                            }
                        />
                        <CardMedia
                            component='img'
                            height='250'
                            image={category.image}
                            alt='Paella dish'
                            sx={{ maxHeight: 250 }}
                        />
                        <CardContent>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    padding: 2,
                                    borderBottom:
                                        theme === "dark"
                                            ? "1px solid #FFFFFF"
                                            : "1px solid #0f0f0f",
                                }}
                            >
                                <Typography sx={{ fontWeight: 700 }}>
                                    Tiempo
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.time} Minutos
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    padding: 2,
                                    borderBottom:
                                        theme === "dark"
                                            ? "1px solid #FFFFFF"
                                            : "1px solid #0f0f0f",
                                }}
                            >
                                <Typography sx={{ fontWeight: 700 }}>
                                    Director
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.director}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    padding: 2,
                                    borderBottom:
                                        theme === "dark"
                                            ? "1px solid #FFFFFF"
                                            : "1px solid #0f0f0f",
                                }}
                            >
                                <Typography sx={{ fontWeight: 700 }}>
                                    Actores
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.director}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    padding: 2,
                                    borderBottom:
                                        theme === "dark"
                                            ? "1px solid #FFFFFF"
                                            : "1px solid #0f0f0f",
                                }}
                            >
                                <Typography sx={{ fontWeight: 700 }}>
                                    Categoria
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.category.map((categories) => (
                                        <span
                                            key={categories}
                                            style={{ marginRight: 10 }}
                                        >
                                            {categories}
                                        </span>
                                    ))}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ padding: 2 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Sinopsis
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.sinopsis}
                                </Typography>
                            </Grid>
                        </CardContent>
                        <CardActions
                            disableSpacing
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "20px 20px 25px 20px",
                            }}
                        >
                            <Button
                                type='button'
                                sx={{
                                    textTransform: "capitalize",
                                    width: "100%",
                                    gap: 2,
                                }}
                                variant='contained'
                                color='primary'
                                onClick={() => navigate("/content-details")}
                            >
                                <RemoveRedEyeOutlinedIcon />
                                Ver
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContentCategory;
