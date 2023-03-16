import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SkillBox from "../components/SkillBox";
import { motion as m } from "framer-motion";

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

const SkillsModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            Edit Skill
            <span onClick={handleClose} style={{ cursor: "pointer" }}>
              X
            </span>
          </Typography>

          <Typography sx={{ mt: 6, mb: 2, opacity: "90%" }}>Skills</Typography>
          <Typography
            id="modal-modal-description"
            sx={{ opacity: "75%", fontSize: "14px" ,mb:"10px"}}
          >
            Keeping your skills up to date helps you get the jobs you want.
          </Typography>
            <SkillBox handleClose={handleClose} />
            </m.div>
        </Box>
      </Modal>
    </div>
  );
};

export default SkillsModal;
