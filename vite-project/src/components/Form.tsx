import "./Form.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    genre: Genre.Pop,
    artist: "",
    date: "",
  });

  const today = new Date().toISOString().split("T")[0];

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div className="container">
      <h3>Your day, your choice, your song</h3>
      <p>Form & Cards</p>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name of the song:</label>
        <input
          type="text"
          id="name"
          name="name"
          maxLength={15}
          value={formData.name}
          required
          onChange={handleInput}
        />
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          required
          onChange={handleInput}
        >
          {Object.values(Genre).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          maxLength={15}
          value={formData.artist}
          required
          onChange={handleInput}
        />
        <label htmlFor="date">Date for note:</label>
        <input
          type="date"
          id="date"
          name="date"
          min="1980-01-01"
          max={today}
          value={formData.date}
          required
          onChange={handleInput}
        />
        <div id="buttons">
          <input type="submit" value="Submit" className="btn" />
          <button type="button" onClick={handleReset} className="button">
            <FontAwesomeIcon icon={faTrashAlt} /> Clear
          </button>
        </div>
      </form>
    </div>
  );
}
