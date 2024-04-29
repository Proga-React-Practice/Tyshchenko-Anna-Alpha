import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { FavoriteCard } from "./Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ThemeProvider } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface Data {
  formDataList: FavoriteCard[];
  Mytheme: Theme;
}

export default function BasicModal({ formDataList, Mytheme }: Data) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={Mytheme}>
      <div>
        <FavoriteIcon
          sx={{
            width: "5rem",
            height: "5rem",
            marginTop: "0.5rem",
            color: "secondary.main",
            marginLeft: "0.5rem",
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
              <ul>
                {formDataList.map((formData, index) => (
                  <li key={index}>
                    {formData.artist} - {formData.name}
                  </li>
                ))}
              </ul>
            </Typography>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
