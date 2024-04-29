import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "rgba(255, 255, 255, 0.4)",
    },
    primary: {
      main: "#332E54",
    },
    secondary: {
      main: "#f1ac88",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#332E54",
    },
    action: {
      active: "#332E54",
      hover: "rgb(191, 81, 81)",
    },
  },

  typography: {
    fontFamily: '"Poppins", sans-serif',
    h4: {
      fontSize: 28.8,
      fontWeight: 1500,
    },
    h6: {
      fontSize: 25.6,
      fontWeight: 500,
    },
    h3: {
      fontSize: 48,
      marginBottom: 0.5,
      marginTop: 56,
      fontWeight: 750,
    },
    body1: {
      fontSize: 32,
      fontWeight: 500,
      marginTop: 15,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: 25.6,
          textDecoration: "none",
          marginTop: 25,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "95%",
          height: 46.4,
          fontSize: 16,
          marginTop: -16,
          marginBottom: 32,
        },
      },
      defaultProps: {
        InputProps: {
          inputProps: {
            style: {
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: 11.2,
              fontSize: 24,
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: 20.8,
          marginTop: -8,
        },
      },
      defaultProps: {
        SelectDisplayProps: {
          style: {
            width: 600,
            backgroundColor: "#fff",
            borderRadius: 1,
            height: 32,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 512,
          height: 64,
          padding: "12 24",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 44,
          marginLeft: 16,
          fontSize: 24,
          textTransform: "none",
          transition: "background-color 0.3s ease, transform 0.3s ease 0s",
          "&:hover": {
            backgroundColor: "#ff8db8",
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ddc3bf",
    },
    secondary: {
      main: "#432a69",
      contrastText: "#ddc3bf",
    },

    text: {
      primary: "#332E54",
      secondary: "#ddc3bf",
    },
    action: {
      active: "#ddc3bf",
      hover: "#d77c6e",
    },
    background: {
      default: "rgba(0, 0, 0, 0.3)",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h4: {
      fontSize: 28.8,
      fontWeight: 1500,
      color: "#ddc3bf",
    },
    h6: {
      fontSize: 25.6,
      fontWeight: 500,
      color: "#ddc3bf",
    },
    h3: {
      fontSize: 48,
      marginBottom: 0.5,
      marginTop: 56,
      fontWeight: 750,
    },
    body1: {
      fontSize: 32,
      fontWeight: 500,
      marginTop: 15,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: 25.6,
          textDecoration: "none",
          marginTop: 25,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "95%",
          height: 46.4,
          fontSize: 16,
          marginTop: -16,
          marginBottom: 32,
        },
      },
      defaultProps: {
        InputProps: {
          inputProps: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              borderRadius: 11.2,
              fontSize: 24,
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: 20.8,
          marginTop: -8,
        },
      },
      defaultProps: {
        SelectDisplayProps: {
          style: {
            width: 600,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: 1,
            height: 32,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: 512,
          height: 64,
          padding: "12 24",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          marginTop: 44,
          marginLeft: 16,
          fontSize: 24,
          textTransform: "none",
          transition: "background-color 0.3s ease, transform 0.3s ease 0s",
          "&:hover": {
            backgroundColor: "#d77c6e",
            transform: "translateY(-5px)",
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
