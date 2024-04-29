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
      fontSize: "1.8rem",
      fontWeight: "1500",
    },
    h6: {
      fontSize: "1.6rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "3rem",
      marginBottom: "0.5rem",
      marginTop: "3rem",
      fontWeight: "750",
    },
    body1: {
      fontSize: "2rem",
      fontWeight: "500",
      marginTop: "1rem",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: "1.6rem",
          textDecoration: "none",
          marginTop: "1.5rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "40rem",
          height: "2.9rem",
          fontSize: "1rem",
          marginTop: "-1rem",
          marginBottom: "2rem",
        },
      },
      defaultProps: {
        InputProps: {
          inputProps: {
            style: {
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "0.7rem",
              fontSize: "1.5rem",
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1.3rem",
          marginTop: "-0.5rem",
        },
      },
      defaultProps: {
        SelectDisplayProps: {
          style: {
            width: "37rem",
            backgroundColor: "#fff",
            borderRadius: "0.7rem",
            height: "2rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "32rem",
          height: "4rem",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          marginTop: "3rem",
          marginLeft: "1rem",
          fontSize: "1.5rem",
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
      fontSize: "1.8rem",
      fontWeight: "1500",
      color: "#ddc3bf",
    },
    h6: {
      fontSize: "1.6rem",
      fontWeight: "500",
      color: "#ddc3bf",
    },
    h3: {
      fontSize: "3rem",
      marginBottom: "0.5rem",
      marginTop: "3rem",
      fontWeight: "750",
    },
    body1: {
      fontSize: "2rem",
      fontWeight: "500",
      marginTop: "1rem",
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: "1.6rem",
          textDecoration: "none",
          marginTop: "1.5rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "40rem",
          height: "2.9rem",
          fontSize: "1rem",
          marginTop: "-1rem",
          marginBottom: "2rem",
        },
      },
      defaultProps: {
        InputProps: {
          inputProps: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              borderRadius: "0.7rem",
              fontSize: "1.5rem",
            },
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "1.3rem",
          marginTop: "-0.5rem",
        },
      },
      defaultProps: {
        SelectDisplayProps: {
          style: {
            width: "37rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: "0.7rem",
            height: "2rem",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "32rem",
          height: "4rem",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          marginTop: "3rem",
          marginLeft: "1rem",

          fontSize: "1.5rem",
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
