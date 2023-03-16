import React from "react";
import styled from "styled-components";

const StyledInputBox = styled.div`
  border: 2px solid hsl(120deg 15% 88%);
  display: flex;
  align-items: center;
  gap: 5px;
  width: 350px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 20px;

`;
const InputBox = styled.input`
  border: none;
  padding: 12px;
  padding-left: 40px;
  height: 100%;

  &:focus {
    outline: none;
  }
  width: 350px;
`;
const SVG = styled.svg`
  position: absolute;
  left: 15px;
  top: 12px;
`;

export default function Input(props) {
  if (props.type === "email") {
    return (
      <StyledInputBox>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="15px"
        >
          <path
            fillRule="evenodd"
            d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </SVG>
        <InputBox
          id={props.id}
          type="email"
          placeholder="Email"
          value={props.value}
          onChange={props.HandleInputFunction}
        />
      </StyledInputBox>
    );
  } else if (props.type === "password") {
    return (
      <StyledInputBox>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="15px"
        >
          <path
            fillRule="evenodd"
            d="M4.5 4.657C4.5 3.192 5.621 2 7 2s2.5 1.19 2.5 2.656V6h-5V4.657zM11.5 6V4.657C11.5 2.09 9.481 0 7 0S2.5 2.09 2.5 4.657V6h-.992C1.228 6 1 6.23 1 6.5v7c0 .276.229.5.5.5h11c.276 0 .5-.231.5-.5v-7a.5.5 0 00-.508-.5H11.5z"
          ></path>
        </SVG>
        <InputBox
          id={props.id}
          type="password"
          placeholder="Password"
          value={props.value}
          onChange={props.HandleInputFunction}
        />
      </StyledInputBox>
    );
  } else if (props.type === "text") {
    return (
      <StyledInputBox>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="15px"
        >
          <path
            fill="grey"
            fillRule="evenodd"
            d="M7 8c-3.314 0-6 1.85-6 3.297v2.027c0 .373.358.676.8.676h10.4c.442 0 .8-.303.8-.676v-2.027C13 9.85 10.314 8 7 8zm3-5a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </SVG>

        <InputBox
          type="text"
          id={props.id}
          value={props.value}
          placeholder="Username"
          onChange={props.HandleInputFunction}
        />
      </StyledInputBox>
    );
  }
}
