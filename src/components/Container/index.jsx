import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  width: ${(props) => (props.width ? props.width : "95%")};
  margin: auto;
`;

export default function Container(props) {
  return <ContainerBox width={props.width}>{props.children}</ContainerBox>;
}
