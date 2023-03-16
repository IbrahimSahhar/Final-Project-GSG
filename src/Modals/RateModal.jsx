import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyled, ButtonStyledTwo } from "./TitleModal";
import { motion as m } from "framer-motion";

import dollar from "../Images/dollar.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minHeight: "550px",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "16px",
};

const InputStyled = styled.input`
  width: 30%;
  padding: 10px 15px;
  border: 2px solid #c6cec9ed;
  border-radius: 15px;
  outline: none;

  &:focus {
    border: 2px solid green;
  }
`;
const P = styled.p`
  position: absolute;
  top: 10px;
  right: -20px;
`;

const Img = styled.img`
  position: absolute;
  top: 7px;
  right: 20px;
`;
const InputBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #dddada;
  padding-bottom: 20px;
`;

const RateModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    handleSavedRateStatus(newRate);
    setOpen(true);
  };

  const handleSavedRateStatus = (value) => {
    setFee(value * (20 / 100));
    setReceive(value - value * (20 / 100));
  };

  const [newRate, setNewRate] = useState(0);

  const [fee, setFee] = useState(0);
  const [receive, setReceive] = useState(0);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setNewRate(res.data[0].rate);
          setOverView(res.data[0].overview);
          setTitle(res.data[0].title);
          setSkills(res.data[0].skills);
          setImage(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "newRate") {
      setNewRate(value);
      setFee(value * (20 / 100));
      setReceive(value - value * (20 / 100));
    }
    if (id === "receive") setReceive(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUD_API}/personalInformation/1`,
          {
            rate: newRate,
            overview: overView,
            title: title,
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
              Change hourly rate
              <span onClick={handleClose} style={{ cursor: "pointer" }}>
                X
              </span>
            </Typography>
            <Typography
              sx={{ mt: 6, mb: 2, opacity: "90%" }}
              id="modal-modal-description"
            >
              Please note that your new hourly rate will only apply to new
              contracts.
              <br />
              <br />
              The Upwork Service Fee is 20% when you begin a contract with a new
              client. Once you bill over $500 with your client, the fee will be
              10%.
              <br />
              <br />
              Your profile rate: $15.00/hr
            </Typography>
            <form onSubmit={handleUpdateTitle}>
              <InputBox>
                <label htmlFor="newRate">
                  Hourly Rate<div>Total amount the client will see</div>
                </label>

                <InputStyled
                  type="text"
                  value={newRate}
                  onChange={handleChangeInput}
                  id="newRate"
                />
                <P>/hr</P>
                <Img src={dollar} alt="dollar" />
              </InputBox>
              <InputBox>
                <label htmlFor="fee">20% Upwork Service Fee</label>

                <InputStyled
                  type="text"
                  value={fee}
                  onChange={handleChangeInput}
                  id="fee"
                  disabled
                />
                <P>/hr</P>
                <Img src={dollar} alt="dollar" />
              </InputBox>
              <InputBox>
                <label htmlFor="newRate">
                  You'll Receive
                  <div>
                    The estimated amount you'll receive after service fees
                  </div>
                </label>
                <InputStyled
                  type="text"
                  value={receive}
                  onChange={handleChangeInput}
                  id="receive"
                />
                <P>/hr</P>
                <Img src={dollar} alt="dollar" />
              </InputBox>
              <div style={{ width: "fit-content", marginLeft: "auto" }}>
                <ButtonStyledTwo type="button" onClick={handleClose}>
                  cancel
                </ButtonStyledTwo>
                <ButtonStyled type="submit">save</ButtonStyled>
              </div>
            </form>
          </m.div>
        </Box>
      </Modal>
    </div>
  );
};

export default RateModal;
