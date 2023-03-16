import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CanvasCard from "../CanvasCard";
import { motion as m } from "framer-motion";

const GreenText = styled.p`
  color: green;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    text-decoration: underline;
  }
`;
const Div = styled.span`
  cursor: pointer;
`;

const CanvasUpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <m.div
      initial={{ x: 800,opacity:0}}
      animate={{ x: 0 ,opacity:1}}
      transition={{ duration: 0.75, ease: "easeOut" ,delay:.6}}
    >
      <Box
        sx={{ width: 1050, padding: "25px" }}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <CanvasUpper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            width="20px"
            onClick={toggleDrawer(anchor, false)}
            style={{ cursor: "pointer" }}
          >
            <polygon
              fillRule="evenodd"
              points="3 7 10.433 14 12 12.524 6.134 7 12 1.476 10.433 0"
            ></polygon>
          </svg>{" "}
          <Link to={"/JobDetails/" + props.detail.id}>
            <GreenText>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="20px"
                height="20px"
                fill="green"
              >
                <path d="M12 7.252h2V14H0V0h6.602v2.014H2v9.971h10V7.252zM8.602 0v2.014h2.088L6.795 5.935l1.414 1.424L12 3.54v1.898h2V0H8.602z"></path>
              </svg>
              open job in a new window
            </GreenText>
          </Link>
        </CanvasUpper>

        <CanvasCard detail={props.detail} />
      </Box>
    </m.div>
  );

  return (
    <>
      <React.Fragment key={"right"}>
        <Div onClick={toggleDrawer("right", true)}>{props.children}</Div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </>
  );
}
