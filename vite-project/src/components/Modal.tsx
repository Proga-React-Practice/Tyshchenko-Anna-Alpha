import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FavoriteCard } from "./Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface Data {
  formDataList: FavoriteCard[];
}

export default function BasicModal({ formDataList }: Data) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const favorites: FavoriteCard[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const favoriteFormDataList = favorites.filter((favorite) =>
    formDataList.some(
      (formData) =>
        formData.name === favorite.name && formData.artist === favorite.artist
    )
  );

  return (
    <div>
      <FavoriteIcon
        sx={{
          width: 75,
          height: 75,
          marginTop: 0.5,
          color: "secondary.main",
          marginLeft: 0.5,
        }}
        onClick={handleOpen}
      ></FavoriteIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "background.default",
            boxShadow: 24,
            p: 4,
            width: "80%",
            maxWidth: 600,
            borderRadius: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h4">
            <List>
              {favoriteFormDataList.map((formData, index) => (
                <ListItem key={index}>
                  <Typography variant="h4">
                    {formData.artist} - {formData.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
