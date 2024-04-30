import Form, { FormData } from "./components/Form.tsx";
import Card from "./components/Card.tsx";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme.tsx";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import { MaterialUISwitch } from "./components/styled/switch.tsx";
import Modal from "./components/Modal.tsx";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  const handleFormSubmit = (data: FormData) => {
    if (formDataList.length === 4) {
      setFormDataList((prevDataList) => prevDataList.slice(1).concat(data));
    } else {
      setFormDataList((prevDataList) => [...prevDataList, data]);
    }
  };
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    handleThemeChange();
  }, []);

  const handleThemeChange = () => {
    setDarkMode((prevDarkMode) => {
      if (!prevDarkMode) {
        document.body.classList.add("dark-body");
        document.body.classList.remove("light-body");
      } else {
        document.body.classList.remove("dark-body");
        document.body.classList.add("light-body");
      }
      return !prevDarkMode;
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.default",
              boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
              width: 230,
              height: 90,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 2,
              marginTop: -6,
              borderRadius: 8,
              [theme.breakpoints.down("lg")]: {
                marginTop: 0,
              },
            }}
          >
            <MaterialUISwitch checked={darkMode} onChange={handleThemeChange} />
            <Modal formDataList={formDataList} />
          </Box>
          <Box
            sx={{
              [theme.breakpoints.up("lg")]: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
              },
              [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                display: "flex",
                justifyContent: "flex-start",
              },
            }}
          >
            <Form onSubmit={handleFormSubmit} />

            <Grid container columnSpacing={2} sx={{ width: "55rem" }}>
              {formDataList.map((formData, index) => (
                <Grid item xs={12} lg={6} key={index}>
                  <Card data={formData} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
