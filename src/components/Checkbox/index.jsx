import React from "react";
import styled from "styled-components";

const CheckboxBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  font-size: 15px;
  
`;
export default function Checkbox(props) {
  return (
    <CheckboxBox>
      <input style={{ cursor: "pointer" }} type="checkbox" id={props.id} />
      <label style={{ cursor: "pointer" }} htmlFor={props.id}>
        {props.title}
      </label>
    </CheckboxBox>
  );
}
