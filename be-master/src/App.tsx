import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { ThemeProps } from "./models/theme";
import { darkTheme, ligthTheme } from "./utils/themes";
import NavBar from "./components/NavBar";
import Login from "./views/login";
import Home from "./views/home";
import ContentCategory from "./views/contentCategory";
import ContentDetails from "./views/contentDetails";
import { usePrivateRouteHook } from "./hooks/privateRoute/usePrivateRouteHook";

const App = () => {
    const { pathname } = useLocation();
    const { PrivateRoute } = usePrivateRouteHook();
    const [theme, setTheme] = useState<Theme>(ligthTheme);

    const toogleTheme = useCallback((theme: ThemeProps) => {
        setTheme(theme === "light" ? ligthTheme : darkTheme);
    }, []);

    useEffect(() => {
        const theme = sessionStorage.getItem("theme") || "light";
        setTheme(theme === "light" ? ligthTheme : darkTheme);
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <Box width='100%'>
                {pathname !== "/login" && <NavBar toogleTheme={toogleTheme} />}
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route
                        path='/home'
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/content-category'
                        element={
                            <PrivateRoute>
                                <ContentCategory />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/content-details'
                        element={
                            <PrivateRoute>
                                <ContentDetails />
                            </PrivateRoute>
                        }
                    />
                    <Route path='*' element={<Navigate to='/login' />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
};

export default App;
