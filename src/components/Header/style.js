import styled from "styled-components";

export const Profilediv = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  border-radius: 6px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  padding: 10px;
  z-index: 1;
  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  & span {
    margin-top: -12px;
    color: #444;
    font-size: 12px;
    margin-bottom: 10px;
  }

  & div {
    border-radius: 10rem;
    border: 1px solid #a4dd83;
  }

  &::after {
    content: "";

    display: block;
    position: absolute;
    bottom: 100%;
    right: 5%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }

  & ul {
    width: 100%;
    margin-top: 10px;
  }

  & li {
    padding: 10px;
    width: 98%;
    cursor: pointer;
    display: flex;
    gap:10px;
    align-items: center;
  }

  & li:hover {
    background-color: #efe;
  }
`;

export const Online = styled.button`
  background-color: ${(props) => (props.isOnline ? "#108a00" : "transparent")};
  color: ${(props) => (props.isOnline ? "#ffffff" : "#111111")};
  padding: 10px;
  border-radius: 10rem;
  border: none;
  transition: all 0.5s;
  cursor: pointer;
`;
