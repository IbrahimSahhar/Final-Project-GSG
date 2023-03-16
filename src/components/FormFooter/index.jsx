import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterBox = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 48px 0;
  background-color: #001e00;
`;

const FooterP = styled.p`
  color: #fff;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default function FormFooter() {
  return (
    <FooterBox>
      <FooterP>
        © 2015 - 2023 Upwork® Global Inc. •
        <span>
          <NavLink to="/privacy"> Privacy Policy</NavLink>
        </span>
      </FooterP>
    </FooterBox>
  );
}
