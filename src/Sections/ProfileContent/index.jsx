import React, { useEffect, useState } from "react";
import axios from "axios";
import TitleModal from "../../Modals/TitleModal";
import OverviewModal from "../../Modals/OverviewModal";
import RateModal from "../../Modals/RateModal";
import SkillsModal from "../../Modals/SkillsModal";
import ImageModal from "../../Modals/ImageModal";
import styled from "styled-components";
import Button from "../../components/Button";
import { Divider } from "@mui/material";
import { GreenText } from "../../components/ProfileInfo";

import Testimonials from "../../Images/Testimonials.png";
import bag from "../../Images/bag.png";
import folder from "../../Images/folder.png";

const MyInfoBox = styled.div`
  width: 75%;
  border: 1px solid #e4ebe4;
  padding: 25px 0 0 0;
  border-radius: 15px;
  margin: 50px auto;
`;

const Box = styled.div`
  width: 75%;
  border: 1px solid #e4ebe4;
  padding: 25px;
  border-radius: 15px;
  margin: 30px auto;
  position: relative;
`;
const FirstBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 25px;
`;

const SecondBox = styled.div`
  display: flex;
`;

const FirstLeftBox = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;

const Name = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FirstRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Edit = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 2px solid #b7c8b7;
  width: 25px;
  height: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CirculeIcon = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  border-radius: 50%;
  border: 2px solid #b7c8b7;
  width: 30px;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const SecondBoxRight = styled.div`
  width: 65%;
  padding: 40px 0;
`;
const SecondBoxLeft = styled.div`
  width: 35%;
  border-right: 1px solid #b7c8b7;
`;

const TitleRate = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const Title = styled.h3`
  font-size: 21px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const OverviewBox = styled.div`
  padding: 0 25px;

  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const Rate = styled.h3`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Tittle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  opacity: 90%;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SkillsBox = styled.span`
  padding: 5px;
  background-color: #e4ebe4;
  font-size: 13px;
  border-radius: 12px;
  color: #001e00;
`;

const HistoryBox = styled.div`
  padding: 25px;
  position: relative;
`;
export default function ProfileContent() {
  const today = new Date();
  const hours = today.getHours();

  const [title, setTilte] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState("");
  const name = localStorage.getItem("name");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation`
        );
        if (res) {
          setTilte(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImage(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <MyInfoBox>
        <FirstBox>
          <FirstLeftBox>
            <img
              width="90px"
              height="90px"
              style={{ borderRadius: "50%", cursor: "pointer" }}
              src={image}
              alt=""
            />
            <Edit>
              <ImageModal>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 14 14"
                  role="img"
                  fill="green"
                  width="15px"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                  ></path>
                </svg>
              </ImageModal>
            </Edit>

            <div>
              <Name>{name}</Name>
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 14 14"
                  role="img"
                  width="20px"
                  height="20px"
                  fill="gray"
                  fillOpacity="75%"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.856 4.9c0 1.183.928 2.103 2.124 2.103 1.23 0 2.164-.907 2.162-2.102-.001-1.19-.93-2.096-2.154-2.098C5.79 2.801 4.856 3.72 4.856 4.9m2.14 9.1c-.09-.116-.17-.22-.25-.326-1.137-1.507-2.214-3.053-3.16-4.684-.517-.89-.996-1.802-1.328-2.779-.561-1.652-.181-3.133.9-4.453C3.998.737 5.123.181 6.449.032c2.35-.266 4.57 1.128 5.302 3.327.203.611.3 1.24.225 1.884-.06.51-.227.991-.418 1.465-.411 1.018-.947 1.973-1.52 2.91a49.947 49.947 0 01-2.96 4.284l-.08.097"
                  ></path>
                </svg>
                Gaza, Palestinian Territories – {hours} pm local time
              </Flex>
            </div>
          </FirstLeftBox>
          <FirstRightBox>
            <Button bg="white" TC="#108a00" title="See Public View" />
            <Button bg="#108a00" TC="white" title="Profile Settings" />
          </FirstRightBox>
        </FirstBox>
        <SecondBox>
          <SecondBoxLeft>
            <HistoryBox>
              <Tittle>
                View profile
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
            <HistoryBox>
              <Tittle>
                Video introduction{" "}
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
            <HistoryBox>
              <Tittle>
                Hours per week
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </CirculeIcon>
              </Tittle>
              <p>More than 30 hrs/week</p>
            </HistoryBox>
            <HistoryBox>
              <Tittle>
                Languages
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
            <HistoryBox>
              <Tittle>
                Military Veteran
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
            <HistoryBox>
              <Tittle>
                Education
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
          </SecondBoxLeft>
          <SecondBoxRight>
            <TitleRate>
              <Title>
                {title}
                <TitleModal>
                  <CirculeIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 14 14"
                      role="img"
                      fill="green"
                      width="15px"
                      style={{ width: "15px", height: "15px" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                      ></path>
                    </svg>
                  </CirculeIcon>
                </TitleModal>
              </Title>

              <Rate>
                ${rate}/hr
                <RateModal>
                  <CirculeIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 14 14"
                      role="img"
                      fill="green"
                      width="15px"
                      style={{ width: "15px", height: "15px" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                      ></path>
                    </svg>
                  </CirculeIcon>
                </RateModal>
              </Rate>
            </TitleRate>
            <OverviewBox>
              {overView}
              <OverviewModal>
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                    ></path>
                  </svg>
                </CirculeIcon>
              </OverviewModal>
            </OverviewBox>
            <Divider></Divider>
            <HistoryBox>
              <Tittle>Work History</Tittle>
              <p>
                No work yet. Once you start getting hired on Upwork, your work
                with clients will show up here.
              </p>
              <GreenText NoPadding={true}>Start your search</GreenText>
            </HistoryBox>
            <Divider></Divider>
            <HistoryBox>
              <Tittle>
                Portfolio (0)
                <CirculeIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    fill="green"
                    width="15px"
                    style={{ width: "15px", height: "15px" }}
                  >
                    <polygon
                      fillRule="evenodd"
                      points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
                    ></polygon>
                  </svg>
                </CirculeIcon>
              </Tittle>
            </HistoryBox>
            <Divider></Divider>
            <HistoryBox>
              <Tittle>
                Skills
                <SkillsModal>
                  <CirculeIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 14 14"
                      role="img"
                      fill="green"
                      width="15px"
                      style={{ width: "15px", height: "15px" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                      ></path>
                    </svg>
                  </CirculeIcon>
                </SkillsModal>
              </Tittle>
              <div style={{ display:"flex",flexWrap:"wrap",gap:"5px" }}>
                {skills.map((item) => (
                  <SkillsBox style={{ marginLeft: "10px" }} key={item.id}>
                    {item.title}
                  </SkillsBox>
                ))}
              </div>
            </HistoryBox>
            <Divider></Divider>
            <HistoryBox>
              <Tittle>Your Project Catalog</Tittle>
              <p style={{ width: "75%" }}>
                Projects are a new way to earn on Upwork that helps you do more
                of the work you love to do. Create project offerings that
                highlight your strengths and attract more clients.
              </p>
              <CirculeIcon position="absolute" top="10px" right="10px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 14 14"
                  role="img"
                  fill="green"
                  width="15px"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
                  ></path>
                </svg>
              </CirculeIcon>
            </HistoryBox>
          </SecondBoxRight>
        </SecondBox>
      </MyInfoBox>
      <Box>
        <Tittle>Testimonials</Tittle>
        <p>Endorsements from past clients</p>
        <Flex style={{ flexDirection: "column", gap: "10px" }}>
          <img src={Testimonials} alt="Testimonials" />
          <p>
            Showcasing client testimonials can strengthen your profile. (+5%)
          </p>
          <GreenText>Request a testimonial</GreenText>
        </Flex>
        <CirculeIcon position="absolute" top="25px" right="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            fill="green"
            width="15px"
            style={{ width: "15px", height: "15px" }}
          >
            <polygon
              fillRule="evenodd"
              points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
            ></polygon>
          </svg>
        </CirculeIcon>
      </Box>
      <Box>
        <Tittle>Certifications</Tittle>

        <CirculeIcon position="absolute" top="25px" right="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            fill="green"
            width="15px"
            style={{ width: "15px", height: "15px" }}
          >
            <polygon
              fillRule="evenodd"
              points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
            ></polygon>
          </svg>
        </CirculeIcon>
      </Box>
      <Box>
        <Tittle>Employment history</Tittle>
        <Flex style={{ flexDirection: "column", gap: "10px" }}>
          <img src={bag} alt="Testimonials" />
          <p>
            Adding employment history can give clients a better understanding of
            your background. (+20%)
          </p>
          <GreenText>Add employment</GreenText>
        </Flex>
        <CirculeIcon position="absolute" top="25px" right="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            fill="green"
            width="15px"
            style={{ width: "15px", height: "15px" }}
          >
            <polygon
              fillRule="evenodd"
              points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
            ></polygon>
          </svg>
        </CirculeIcon>
      </Box>
      <Box>
        <Tittle>Other Experiences</Tittle>
        <Flex style={{ flexDirection: "column", gap: "10px" }}>
          <img src={folder} alt="Testimonials" />
          <p>
            Highlighting relevant experiences can boost your visibility in our
            search results. (+5%)
          </p>
          <GreenText>Add an experience</GreenText>
        </Flex>
        <CirculeIcon position="absolute" top="25px" right="25px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            fill="green"
            width="15px"
            style={{ width: "15px", height: "15px" }}
          >
            <polygon
              fillRule="evenodd"
              points="6 0 6 6 0 6 0 8 6 8 6 14 8 14 8 8 14 8 14 6 8 6 8 0"
            ></polygon>
          </svg>
        </CirculeIcon>
      </Box>
    </div>
  );
}
