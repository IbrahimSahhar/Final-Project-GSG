import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const Circule = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #beccbe;
  cursor: pointer;

  &:hover {
    background-color: #0b4200;
  }
`;
export default function SocialLink(props) {
  return (
    <Circule>
      <NavLink to={props.link}>
        <img width="20px"  src={props.icon} alt=""/>
      </NavLink>
    </Circule>
  );
}
