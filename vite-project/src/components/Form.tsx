import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  FormControl,
  FormLabel,
  Typography,
  Select,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

import { useTheme } from "@mui/material";

interface Props {
  onSubmit: (data: FormData) => void;
}

enum Genre {
  Pop = "Pop",
  Rock = "Rock",
  HipHopRap = "Hip-Hop/Rap",
  KPop = "K-Pop (Korean Pop)",
  Funk = "Funk",
  Metal = "Metal",
  Jazz = "Jazz",
}

export { Genre };

export type FormData = {
  name: string;
  genre: Genre;
  artist: string;
  date: string;
};

export default function Form({ onSubmit }: Props) {
  const theme = useTheme();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    genre: Genre.Pop,
    artist: "",
    date: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function handleInput(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    if (name === "date") {
      if (value < "1980-01-01") {
        setFormData((prev) => ({ ...prev, [name]: "1980-01-01" }));
      } else if (value > today) {
        setFormData((prev) => ({ ...prev, [name]: today }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSelectChange(e: SelectChangeEvent<string>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as Genre }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data :", formData);
    setFormData({
      name: "",
      genre: Genre.Pop,
      artist: "",
      date: "",
    });
  }

  function handleReset() {
    setFormData({
      name: "",
      genre: Genre.Pop,
      artist: "",
      date: "",
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 900,
        height: 950,
        borderRadius: 18,
        marginLeft: -2,
        marginTop: 2.5,
        flexGrow: 1,
        backgroundColor: "background.default",
        boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
        [theme.breakpoints.up("lg")]: {
          width: 900,
          height: 950,
        },
        [theme.breakpoints.down("lg")]: {
          width: 750,
          height: 800,
          marginLeft: -30,
          marginTop: 14,
          alignItems: "center",
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "primary.main",
          [theme.breakpoints.down("lg")]: {
            fontSize: 30,
          },
        }}
      >
        Your day, your choice, your song
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "primary.main",
          [theme.breakpoints.down("lg")]: {
            fontSize: 30,
            marginTop: 1,
          },
        }}
      >
        Form & Cards
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl
          id="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 2, lg: 1.6 },
          }}
        >
          <FormLabel htmlFor="name">Name of the song:</FormLabel>

          <TextField
            type="text"
            id="name"
            name="name"
            value={formData.name}
            required
            onChange={handleInput}
            sx={{
              [theme.breakpoints.down("lg")]: {
                width: "85%",
                height: 15,
              },
            }}
          />
          <FormLabel htmlFor="genre">Genre:</FormLabel>
          <Select
            sx={{
              color: "text.secondary",
              fontSize: 25,
              [theme.breakpoints.down("lg")]: {
                width: "85%",
                height: 15,
                marginTop: 1.5,
              },
            }}
            id="genre"
            name="genre"
            value={formData.genre}
            required
            onChange={handleSelectChange}
          >
            {Object.values(Genre).map((genre) => (
              <MenuItem
                sx={{ color: "primary.main", fontSize: 20 }}
                key={genre}
                value={genre}
              >
                {genre}
              </MenuItem>
            ))}
          </Select>

          <FormLabel htmlFor="artist">Artist:</FormLabel>

          <TextField
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            required
            onChange={handleInput}
            sx={{
              [theme.breakpoints.down("lg")]: {
                width: "85%",
                height: 15,
              },
            }}
          />
          <FormLabel htmlFor="date">Date for note:</FormLabel>

          <TextField
            type="date"
            id="date"
            name="date"
            value={formData.date}
            required
            onChange={handleInput}
            sx={{
              [theme.breakpoints.down("lg")]: {
                width: "85%",
                height: 15,
              },
            }}
          />
          <Box
            id="buttons"
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down("lg")]: {
                width: "75%",
              },
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                color: "secondary.contrastText",
              }}
              className="btn"
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              sx={{
                width: "18%",
                height: 55,
                backgroundColor: "text.primary",
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
              className="button"
              variant="contained"
              startIcon={<DeleteOutlineIcon />}
            >
              Clear
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
}
