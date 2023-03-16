import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, ButtonStyledTwo, InputStyled } from "./TitleModal";
import { motion as m } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "400px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px",
};

const ImageModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newImg, setNewImg] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setNewImg(res.data[0].image);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setTitle(res.data[0].title);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewImg(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUD_API}/personalInformation/1`,
          {
            title: title,
            overview: overView,
            rate: rate,
            skills: skills,
            image: newImg,
          }
        );
        if (res) {
          navigate(0);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      {" "}
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <m.div
            initial={{ opacity: 0 ,y:150}}
            animate={{ opacity: 1 ,y:0}}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Typography
              style={{ display: "flex", justifyContent: "space-between" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {" "}
              Upload New Image
              <span onClick={handleClose} style={{ cursor: "pointer" }}>
                X
              </span>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 8 }}>
              Show clients the best version of yourself!
            </Typography>
            <form style={{ marginTop: "20px" }} onSubmit={handleUpdateTitle}>
              <label>Insert the URL of the photo to upload</label>
              <InputStyled
                style={{ marginBottom: "20px" }}
                type="text"
                value={newImg}
                onChange={handleChangeInput}
              />

              <div style={{ width: "fit-content", marginLeft: "auto" }}>
                <ButtonStyledTwo type="button" onClick={handleClose}>
                  cancel
                </ButtonStyledTwo>
                <ButtonStyled type="submit">Save Photo</ButtonStyled>
              </div>
            </form>
          </m.div>
        </Box>
      </Modal>
     
    </div>
  );
};

export default ImageModal;
