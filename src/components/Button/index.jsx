import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonBox = styled.button`
  padding: 10px 30px;
  font-size: 17px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.TC};
  border-radius: 25px;
  border: 2px solid #108a00;
  cursor: pointer;
`;

export default function Button(props) {
  return (
    <NavLink to={props.path}>
    <ButtonBox onClick={props.function} type={props.type} bg={props.bg} TC={props.TC}>
      {props.title}
    </ButtonBox>
    </NavLink>
  );
}
