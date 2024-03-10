import React, { useState } from "react";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProps } from "../../models/theme";
import { Link, useNavigate } from "react-router-dom";
import useAppSelector from "../../hooks/store/useAppSelector";
import { IRootState } from "../../models/store/core";
import useAppDispatch from "../../hooks/store/useAppDispatch";
import { saveUser } from "../../stateManagement/register";

interface Props {
    toogleTheme: (theme: ThemeProps) => void;
}

const NavBar: React.FC<Props> = ({ toogleTheme }) => {
    const theme = sessionStorage.getItem("theme") || "light";
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user } = useAppSelector(
        (state: IRootState) => state.registerReducer
    );
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position='static' sx={{ mb: 5 }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <img
                        src='https://media.licdn.com/dms/image/C560BAQGR9yeAOjD-bQ/company-logo_200_200/0/1630648671138?e=2147483647&v=beta&t=R9K-5OWshLo6sf1ufEocde0K0PMNGi0DcZnR-ZPJ_Hg'
                        width={50}
                        height={50}
                        alt='logo'
                    />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                            sx={{
                                color: theme === "light" ? "#154360" : "#FFF",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link
                                    to='/home'
                                    style={{
                                        textDecoration: "none",
                                        color:
                                            theme === "light"
                                                ? "#154360"
                                                : "#FFF",
                                    }}
                                >
                                    Home
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            ml: 5,
                            justifyContent: "space-between",
                            pr: 4,
                        }}
                    >
                        <Box
                            sx={{
                                gap: 3,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Link
                                to='/home'
                                style={{
                                    textDecoration: "none",
                                    color:
                                        theme === "light" ? "#154360" : "#FFF",
                                }}
                            >
                                Home
                            </Link>
                        </Box>
                        <Box>
                            <Button
                                sx={{
                                    justifyContent: "flex-end",
                                    textTransform: "capitalize",
                                    fontSize: 15,
                                    color:
                                        theme === "light" ? "#154360" : "#FFF",
                                }}
                                onClick={() => {
                                    dispatch(
                                        saveUser({
                                            email: "",
                                            password: "",
                                            isActive: false,
                                        })
                                    );
                                    navigate("/login");
                                }}
                            >
                                Logout
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={user.email}>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt={user.email}
                                    src='/static/images/avatar/2.jpg'
                                    sx={{
                                        background:
                                            theme === "light"
                                                ? "#154360"
                                                : "#FFF",
                                        color:
                                            theme === "light"
                                                ? "#FFF"
                                                : "#154360",
                                        textTransform: "uppercase",
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography textAlign='center'>
                                    {user.email}
                                </Typography>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    onClick={() => {
                                        sessionStorage.setItem("theme", "dark");
                                        toogleTheme("dark");
                                        handleCloseUserMenu();
                                    }}
                                    sx={{
                                        background: "none",
                                        "&:hover": {
                                            background: "none !important",
                                            color:
                                                theme === "light"
                                                    ? "#154360"
                                                    : "#FFF",
                                        },
                                        color:
                                            theme === "light"
                                                ? "#154360"
                                                : "#FFF",
                                    }}
                                >
                                    Dark Mode
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button
                                    onClick={() => {
                                        sessionStorage.setItem(
                                            "theme",
                                            "light"
                                        );
                                        toogleTheme("light");
                                        handleCloseUserMenu();
                                    }}
                                    sx={{
                                        background: "none",
                                        "&:hover": {
                                            background: "none !important",
                                            color:
                                                theme === "light"
                                                    ? "#154360"
                                                    : "#FFF",
                                        },
                                        color:
                                            theme === "light"
                                                ? "#154360"
                                                : "#FFF",
                                    }}
                                >
                                    Light Mode
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
