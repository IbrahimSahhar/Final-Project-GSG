import React from "react";
import styled from "styled-components";

const FormBoxx = styled.form`
  margin: auto;
  width: fit-content;
  padding: 40px 80px;
  border: 1px solid hsl(120deg 15% 88%);
  border-radius: 14px;
  margin-bottom: 40px;
  text-align: center;
`;

export default function FormBox(props) {
  return <FormBoxx onSubmit={props.SubmitFunction}>{props.children}</FormBoxx>;
}
