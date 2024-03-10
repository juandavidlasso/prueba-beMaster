import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from "@mui/material";
import YouTube from "react-youtube";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../../hooks/store/useAppSelector";
import { IRootState } from "../../models/store/core";

interface Props {}

const ContentDetails: React.FC<Props> = () => {
    const navigate = useNavigate();
    const { category } = useAppSelector(
        (state: IRootState) => state.registerReducer
    );
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
                        onClick={() => navigate("/content-category")}
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
                        <YouTube videoId={category.trailer} />
                        <CardContent>
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
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContentDetails;
