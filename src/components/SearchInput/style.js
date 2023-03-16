import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  align-items: center;
  margin: 30px 0 8px 0;
  margin: ${(props) => (props.margin ? " 10px 0 8px 0" : " 30px 0 8px 0")};
`;

export const Iconsearch = styled.button`
  width: 45px;
  background-color: #3c8224;
  padding: 10px;
  height: 38px;
  cursor: pointer;
  outline: none;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
