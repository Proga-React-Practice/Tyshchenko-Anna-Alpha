import "./Card.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FormData } from "./Form";

interface FavoriteCard {
  name: string;
  artist: string;
}

interface Props {
  data: FormData;
}

export default function Cards({ data }: Props) {
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
    <div className="area">
      <div className="cards">
        <div className="thefront">
          <ul>
            <h3>Name of the song:</h3> <p>{data?.name}</p>
            <h3>Genre:</h3> <p>{data?.genre}</p>
            <h3>Artist:</h3> <p>{data?.artist}</p>
            <h3>Date for note:</h3> <p>{data?.date}</p>
          </ul>
        </div>
        <div onClick={handleToggleFavorite} style={{ cursor: "pointer" }}>
          {isFavorite ? (
            <FontAwesomeIcon icon={faHeart} className="heart-filled" />
          ) : (
            <FontAwesomeIcon icon={faHeart} className="heart-empty" />
          )}
        </div>
      </div>
    </div>
  );
}
