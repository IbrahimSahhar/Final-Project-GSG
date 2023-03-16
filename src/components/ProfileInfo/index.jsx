import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ProfileInfoBox = styled.div`
  border: 1px solid #e4ebe4;
  padding: 25px 0;
  border-radius: 15px;
  text-align: ${(props) => (props.textAlign ? "center" : "")};
  margin-bottom: 20px;
`;

const H3 = styled.h3`
  text-decoration: underline;
  color: #001e00;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  text-transform: capitalize;
  &:hover {
    color: #14a800;
  }
`;

const P = styled.p`
  padding: 0 25px;
  font-size: 14px;
  margin: 5px 0;
`;

const Connects = styled.p`
  padding: 25px 0;
  color: #108a00;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #14a800;
  }
`;

export const GreenText = styled.p`
  padding: ${(props)=>props.NoPadding? "":"0 30px"};

  margin-top: 5px;
  color: #108a00;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #14a800;
  }
`;

const Title = styled.h3`
  padding: 0 30px;
  color: #001e00;
  font-size: 20px;
  font-weight: 700;
`;

const HR = styled.hr`
  margin: 25px 0;
  border: 1px solid #e4ebe4;
`;

const Dividerr = styled.div`
  margin: 30px 0;
`;
export default function ProfileInfo() {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const name = localStorage.getItem("name");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setImg(res.data[0].image);
          setTitle(res.data[0].title);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <ProfileInfoBox textAlign="center">
        <NavLink to="/profile">
          <img
            width="75px"
            height="75px"
            style={{ borderRadius: "50%", cursor: "pointer", margin: "auto" }}
            src={img}
            alt=""
          />
          <H3>{name}</H3>
          <P>{title}</P>
        </NavLink>
        <Connects>131 Available Connects</Connects>
      </ProfileInfoBox>
      <ProfileInfoBox>
        <Title>Proposals</Title>
        <GreenText>My Proposals</GreenText>
        <HR></HR>
        <P>Looking for work? Browse jobs and get started on a proposal.</P>
      </ProfileInfoBox>
      <ProfileInfoBox>
        <Title>Project Catalog </Title>
        <GreenText>My Project Dashboard</GreenText>
        <Dividerr></Dividerr>
        <GreenText>Create a Catalog project </GreenText>
        <P> for clients to purchase instantly</P>
      </ProfileInfoBox>
    </>
  );
}
