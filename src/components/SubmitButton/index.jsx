import React from "react";
import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";

const Button = styled.button`
  width: 350px;
  color: #fff;
  background-color: #108a00;
  padding: 14px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #31ae21;
  }
`;
export default function SubmitButton(props) {
  const { isLoading } = useAuthContext();

  if (props.value === "Sign Up") {
    return (
      <Button type="submit">
        {isLoading ? "Loading..." : "Create my account"}
      </Button>
    );
  } else {
    return <Button type="submit"> {isLoading ? "Loading..." : "Login"}</Button>;
  }
}
