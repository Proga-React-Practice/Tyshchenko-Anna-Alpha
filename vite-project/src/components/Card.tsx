import { useState } from "react";
import { FormData } from "./Form";
import { Typography, Box, List } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material";
export interface FavoriteCard {
  name: string;
  artist: string;
}
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

interface Props {
  data: FormData;
  Mytheme: Theme;
}

export default function Cards({ data, Mytheme }: Props) {
  const theme = useTheme();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites: FavoriteCard[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (!isFavorite) {
      const newFavorites = [...favorites, data];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      const newFavorites = favorites.filter(
        (item: FavoriteCard) => item.name !== data.name
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite();
  };

  return (
    <ThemeProvider theme={Mytheme}>
      <Box
        className="area"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1rem",
          justifyContent: "center",
          width: "100%",
          padding: "1rem 0;",
          marginLeft: "10rem",
          paddingTop: "4rem",
        }}
      >
        <Box
          className="cards"
          sx={{
            position: "relative",
            width: "24rem",
            height: "24rem",
            borderRadius: "3rem",
            backgroundColor: "background.default",
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
            [theme.breakpoints.down("lg")]: {
              width: "30.25rem",
              height: "30.3rem",
              marginRight: "56rem",
              alignItems: "center",
            },
          }}
        >
          <Box
            className="thefront"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              marginRight: "3rem",
            }}
          >
            <List
              sx={{
                flex: "1 1 48%",
                listStyleType: "none",
              }}
            >
              <Typography variant="h4">Name of the song:</Typography>
              <Typography variant="h6">{data?.name}</Typography>
              <Typography variant="h4">Genre:</Typography>
              <Typography variant="h6">{data?.genre}</Typography>
              <Typography variant="h4">Artist:</Typography>
              <Typography variant="h6">{data?.artist}</Typography>
              <Typography variant="h4">Date for note:</Typography>
              <Typography variant="h6">{data?.date}</Typography>
            </List>
          </Box>

          <FavoriteIcon
            onClick={handleToggleFavorite}
            className="heart-filled"
            sx={{
              width: "4rem",
              height: "4rem",
              marginTop: "-1.5rem",
              cursor: "pointer",
              marginLeft: "10rem",
              borderRadius: "0.5rem",
              color: isFavorite ? "action.hover" : "action.active",
              [theme.breakpoints.down("lg")]: {
                width: "5.25rem",
                height: "5.3rem",
                marginLeft: "12rem",
              },
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
