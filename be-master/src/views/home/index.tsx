import React from "react";
import {
    Avatar,
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
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { categoryDataItems } from "../../__mocks__/categoryMock";
import { useHomeHook } from "./hooks/useHomeHook";

interface Props {}

const Home: React.FC<Props> = () => {
    const { submitCategory } = useHomeHook();
    return (
        <Box sx={{ width: "100%", padding: 3 }}>
            <Grid container sx={{ width: "100%" }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontSize: 40,
                            textAlign: "center",
                            fontWeight: 700,
                        }}
                        color='text.primary'
                    >
                        Listado de Categorías
                    </Typography>
                </Grid>
                {categoryDataItems.map((category) => (
                    <Grid
                        key={category.id}
                        item
                        xs={12}
                        sm={4}
                        sx={{ padding: 3 }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                borderRadius: 4,
                            }}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{
                                            bgcolor: "#154360",
                                            color: "#FFFFFF",
                                        }}
                                        aria-label='recipe'
                                    >
                                        {category.title.substring(0, 1)}
                                    </Avatar>
                                }
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
                                <Typography
                                    variant='body2'
                                    color='text.primary'
                                >
                                    {category.sinopsis.substring(0, 250)}
                                    {"..."}
                                </Typography>
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
                                    onClick={() => submitCategory(category)}
                                >
                                    <RemoveRedEyeOutlinedIcon />
                                    Ver
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Home;
