import { useState } from "react";
import { FormData } from "./Form";
import { Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material";

export interface FavoriteCard {
  name: string;
  artist: string;
}

interface Props {
  data: FormData;
}

export default function Cards({ data }: Props) {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 1,
        justifyContent: "center",
        width: "100%",
        padding: "1 0;",
        marginLeft: 15,
        paddingTop: 6,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 400,
          height: 400,
          borderRadius: 15,
          backgroundColor: "background.default",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
          [theme.breakpoints.down("lg")]: {
            width: 500,
            height: 500,
            marginRight: 110,
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: { lg: 6, xs: 12 },
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
        </Box>

        <FavoriteIcon
          onClick={handleToggleFavorite}
          sx={{
            width: 70,
            height: 70,
            marginTop: -3,
            cursor: "pointer",
            marginLeft: 20,
            borderRadius: 1,
            color: isFavorite ? "action.hover" : "action.active",
            [theme.breakpoints.down("lg")]: {
              width: 90,
              height: 90,
              marginLeft: 24,
            },
          }}
        />
      </Box>
    </Box>
  );
}
