import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#101418",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
        },
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.color === "primary" && {
                        backgroundColor: "#17202A",
                        backgroundImage: "none",
                    }),
                }),
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#979A9A !important",
                        color: "#101418",
                    },
                },
            },
            variants: [
                {
                    props: { variant: "contained" },
                    style: {
                        backgroundColor: "#FFFFFF !important",
                        color: "#000000 !important",
                        textTransform: "initial",
                        borderRadius: "10px",
                        fontSize: 18,
                    },
                },
            ],
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 0px 10px 0px rgba(255,255,255,1)",
                },
            },
        },
    },
});
