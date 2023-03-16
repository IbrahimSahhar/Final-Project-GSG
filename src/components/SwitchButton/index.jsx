import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SwitchButtonBox = styled.div`
  border: 2px solid #108a00;
  width: fit-content;
  margin: auto;
  padding: 11px 20px;
  border-radius: 35px;
  width: 220px;
  color: #108a00;

 
    font-size: 15px;
    font-weight: 600;
    display: block;
  
`;
export default function SwitchButton(props) {
  return (
    <NavLink to="/Signup">
      <SwitchButtonBox>{props.value}</SwitchButtonBox>
    </NavLink>
  );
}
