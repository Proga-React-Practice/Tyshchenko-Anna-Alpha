import Form, { FormData } from "./components/Form.tsx";
import Card from "./components/Card.tsx";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme.tsx";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import { MaterialUISwitch } from "./theme/switch.tsx";
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
    document.body.classList.add("light-body");

    return () => {
      document.body.classList.remove("light-body");
      document.body.classList.remove("dark-body");
    };
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFormDataList(storedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(formDataList));
  }, [formDataList]);

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
      <div className="App">
        <Box
          className="content"
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
              width: "15rem",
              height: "6rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "1rem",
              marginTop: "-3rem",
              borderRadius: "2rem",
              [theme.breakpoints.down("lg")]: {
                marginTop: "0rem",
              },
            }}
          >
            <MaterialUISwitch checked={darkMode} onChange={handleThemeChange} />
            <Modal
              Mytheme={darkMode ? darkTheme : lightTheme}
              formDataList={formDataList}
            />
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
            <Form
              onSubmit={handleFormSubmit}
              Mytheme={darkMode ? darkTheme : lightTheme}
            />

            <Grid container columnSpacing={2} sx={{ width: "55rem" }}>
              {formDataList.map((formData, index) => (
                <Grid item xs={12} lg={6} key={index}>
                  <Card
                    data={formData}
                    Mytheme={darkMode ? darkTheme : lightTheme}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
