import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion as m } from "framer-motion";

export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #c6cec9ed;
  border-radius: 15px;
  outline: none;
  margin-bottom: 70px;
`;

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 15px;
  color: white;
  background-color: #108a00;

  &:hover {
    background-color: #14a800;
  }
  border: none;
  cursor: pointer;
`;
export const ButtonStyledTwo = styled.button`
  padding: 10px 20px;
  border-radius: 15px;
  color: #108a00;
  background-color: white;
  cursor: pointer;
  border: none;
  margin-right: 10px;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "400px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px",
};

const TitleModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newTitle, setNewTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setNewTitle(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImage(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewTitle(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUD_API}/personalInformation/1`,
          {
            title: newTitle,
            overview: overView,
            rate: rate,
            skills: skills,
            image: image,
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
      <div onClick={handleOpen}>{props.children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography
              style={{ display: "flex", justifyContent: "space-between" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Edit Your Title
              <span onClick={handleClose} style={{ cursor: "pointer" }}>
                X
              </span>
            </Typography>
            <Typography sx={{ mt: 6, mb: 2, opacity: "90%" }}>
              Your title
            </Typography>
            <Typography
              sx={{ opacity: "75%", fontSize: "14px" }}
              id="modal-modal-description"
            >
              Enter a single sentence description of your professional
              skills/experience (e.g. Expert Web Designer with Ajax experience)
            </Typography>
            <form style={{ marginTop: "20px" }} onSubmit={handleUpdateTitle}>
              <InputStyled
                type="text"
                value={newTitle}
                onChange={handleChangeInput}
              />
              <ButtonStyledTwo type="button" onClick={handleClose}>
                cancel
              </ButtonStyledTwo>
              <ButtonStyled type="submit">save</ButtonStyled>
            </form>
          </m.div>
        </Box>
      </Modal>
    </div>
  );
};

export default TitleModal;
