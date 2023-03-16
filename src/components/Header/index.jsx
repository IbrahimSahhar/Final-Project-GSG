import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Menus from "../Menus";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

import arrow from "../../Images/arrow.png";
import notification from "../../Images/notification.png";
import question from "../../Images/question.png";
import SearchInput from "../SearchInput";
import { Online, Profilediv } from "./style";

const HeaderBox = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  background-color: #fff;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;
const LeftMenu = styled.div``;

const SignUpP = styled.p`
  & a {
    color: #108a00;
    font-weight: 600;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

export default function Header(props) {
  const { setToken, setisAuthorized } = useAuthContext();
  const [img, setImg] = useState("");
  const [showDiv, setShowDiv] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const name = localStorage.getItem("name");

  const handleShow = () => {
    setShowDiv(!showDiv);
  };

  const handleOnlineClick = () => {
    setIsOnline(true);
  };

  const handleInvisibleClick = () => {
    setIsOnline(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setisAuthorized(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (props.login) {
    return (
      <HeaderBox>
        <NavLink to="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 28"
            role="img"
            aria-hidden="true"
            width="100px"
          >
            <path
              fill="#14a800"
              d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
            ></path>{" "}
            <polygon
              fill="#14a800"
              points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
            ></polygon>{" "}
            <path
              fill="#14a800"
              d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
            ></path>
          </svg>
        </NavLink>
      </HeaderBox>
    );
  }
  if (props.signup) {
    return (
      <HeaderBox justify="space-between">
        <NavLink to="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 28"
            role="img"
            aria-hidden="true"
            width="100px"
          >
            <path
              fill="#14a800"
              d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
            ></path>{" "}
            <polygon
              fill="#14a800"
              points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
            ></polygon>{" "}
            <path
              fill="#14a800"
              d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
            ></path>
          </svg>
        </NavLink>

        <SignUpP>
          Here to hire talent? <NavLink to="/client"> Join as a Client</NavLink>
        </SignUpP>
      </HeaderBox>
    );
  } else {
    return (
      <HeaderBox justify="space-between">
        <LeftBox>
          <NavLink to="/Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102 28"
              role="img"
              aria-hidden="true"
              width="100px"
            >
              <path
                fill="#14a800"
                d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
              ></path>{" "}
              <path
                fill="#14a800"
                d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
              ></path>{" "}
              <polygon
                fill="#14a800"
                points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
              ></polygon>{" "}
              <path
                fill="#14a800"
                d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
              ></path>{" "}
              <path
                fill="#14a800"
                d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
              ></path>
            </svg>
          </NavLink>
          <LeftMenu>
            <Menus />
          </LeftMenu>
        </LeftBox>
        <RightBox>
          <SearchInput
            current={props.current ? true : false}
            margin={true}
            width="250px"
          />
          <img
            width="35px"
            height="40px"
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={question}
            alt=""
          />
          <img
            width="40px"
            height="40px"
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={arrow}
            alt=""
          />
          <img
            width="35px"
            height="40px"
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={notification}
            alt=""
          />
          <img
            width="35px"
            height="35px"
            style={{ borderRadius: "50%", cursor: "pointer" }}
            src={img}
            alt=""
            onClick={handleShow}
          />
          {showDiv && (
            <Profilediv>
              <img
                width="35px"
                height="35px"
                style={{ borderRadius: "50%", cursor: "pointer" }}
                src={img}
                alt=""
              />

              <h2>{name}</h2>
              <div style={{ margin: "5px 0", border: "none" }}>Freelancer</div>
              <div>
                <Online isOnline={isOnline} onClick={handleOnlineClick}>
                  Online
                </Online>
                <Online isOnline={!isOnline} onClick={handleInvisibleClick}>
                  Invisible
                </Online>
              </div>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    style={{ verticalAlign: "middle", width: "20px" }}
                    role="img"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3.5"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                      stroke="var(--icon-color, #001e00)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                      stroke="var(--icon-color, #001e00)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18.25 12.62v-1.24h0l2.36-2a9 9 0 00-2.18-3.67l-2.89 1.1h0a6.89 6.89 0 00-.88-.5h0l-.52-3a8.62 8.62 0 00-4.28 0l-.52 3h0a6.89 6.89 0 00-.88.5l-2.89-1.1a9 9 0 00-2.18 3.67l2.36 2a6.22 6.22 0 000 1.22l-2.36 2a9 9 0 002.18 3.67l2.89-1.1a6.89 6.89 0 00.88.5h0l.52 3a8.62 8.62 0 004.28 0l.52-3h0a6.89 6.89 0 00.88-.5h0l2.89 1.1a9 9 0 002.18-3.67l-2.36-2z"
                    ></path>
                  </svg>
                  Settings
                </li>
                <li onClick={logout}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    role="img"
                    data-test="logout"
                    width="20px"
                    height="20px"
                  >
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke="var(--icon-color, #001e00)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M5.8 5.8c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3m8-6h-10"
                    ></path>
                    <path
                      vectorEffect="non-scaling-stroke"
                      stroke="var(--icon-color, #001e00)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M7.8 7.8l-4 4 4 4"
                    ></path>
                  </svg>
                  LogOut
                </li>
              </ul>
            </Profilediv>
          )}
        </RightBox>
      </HeaderBox>
    );
  }
}
