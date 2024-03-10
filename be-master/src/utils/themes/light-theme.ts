import { createTheme } from "@mui/material/styles";

export const ligthTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#FFFFFF",
        },
        text: {
            primary: "#101418",
            secondary: "#FFFFFF",
        },
    },

    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.color === "primary" && {
                        backgroundColor: "#FFFFFF",
                    }),
                }),
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#1F618D !important",
                        color: "#FFFFFF",
                    },
                },
            },
            variants: [
                {
                    props: { variant: "contained", color: "primary" },
                    style: {
                        backgroundColor: "#154360 !important",
                        color: "#FFFFFF !important",
                        textTransform: "initial",
                        borderRadius: "10px",
                        fontSize: 18,
                    },
                },
            ],
        },

        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#000",
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)",
                },
            },
        },
    },
});
