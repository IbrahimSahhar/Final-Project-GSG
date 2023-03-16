import styled from "styled-components";

export const Styledul = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;

  & ul {
    z-index: 9999999;
  }

  li {
    position: relative;
    cursor: pointer;
  }
  li > div {
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  div:hover {
    color: #3c8224;
  }
  li > ul {
    display: none;
    position: absolute;
    top: 105%;
    left: 0;
    border: 1px solid rgba(0, 30, 0, 0.15);
    box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
    color: black;
  }

  li ul div {
    padding-left: 15px;
  }

  li:hover > ul {
    display: block;
    border-radius: 6px;
    width: 200px;
    background-color: #ffffff;
  }
  li:hover > ul div {
    color: #000;
  }

  li:hover > ul::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }
`;

export const LiMsg = styled.li`
  padding-top: 1px;
  font-size: 14px;
`;
export const LiOptions = styled.li`
  &:hover {
    background-color: #e5f6d3;
    cursor: pointer;
  }
  padding: 10px;
  display: block;
`;
