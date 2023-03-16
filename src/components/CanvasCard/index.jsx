import { Divider } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Button from "../Button";
import SkillsCard from "../SkillsCard";


const CanvasCardBox = styled.div`
  border: 1px solid #e4ebe4;
  margin: 50px 0;
  border-radius: 15px;
`;

const FirstBox = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 65%;
`;
const Right = styled.div`
  border-left: 1px solid #e4ebe4;
`;

const PaddingBox = styled.div`
  padding: 25px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  color: #001e00;
  margin-bottom: 50px;
`;

const Special = styled.h4`
  font-size: 15px;
  color: #108a00;
  &:hover {
    text-decoration: underline;
  }
  margin-bottom: 10px;
`;

const Time = styled.div`
  color: #5e6d55;
  margin-bottom: 20px;
`;

const Location = styled.div`
  color: #001e00;
  font-size: 16px;
  text-transform: capitalize;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 17px;
  color: #001e00;
`;

export const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.align};
`;

export default function CanvasCard(props) {


  return (
    <CanvasCardBox>
      <FirstBox>
        <Left>
          <PaddingBox>
            <Title>{props.detail.title}</Title>
            <Special>{props.detail.speciality}</Special>
            <Time>Posted {props.detail.posted}</Time>
            <Location>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="20px"
                height="20px"
                fill="blue"
              >
                <path d="M10.8 2.692C10.214.93 8.439-.188 6.558.025c-1.062.12-1.961.566-2.631 1.384-.866 1.058-1.17 2.244-.722 3.569.266.782.649 1.511 1.063 2.225.758 1.308 1.618 2.547 2.529 3.754l.199.261c.029-.034.049-.056.065-.077a39.597 39.597 0 002.367-3.432c.458-.752.888-1.518 1.216-2.332.153-.381.287-.768.334-1.174.061-.517-.016-1.021-.178-1.511zM6.982 5.611c-.955 0-1.699-.736-1.699-1.684 0-.946.748-1.682 1.707-1.681.979.002 1.723.728 1.723 1.682.002.958-.745 1.683-1.731 1.683zm3.248 4.078c2.23.383 3.77 1.138 3.77 2.02C14 12.973 10.866 14 7 14c-3.867 0-7-1.027-7-2.291 0-.881 1.533-1.635 3.756-2.018.324.49.678.996 1.059 1.52-.883.128-1.578.313-2.004.494.733.311 2.19.659 4.189.659 2 0 3.456-.349 4.189-.659-.428-.184-1.127-.369-2.017-.498.375-.516.728-1.021 1.058-1.518z"></path>
              </svg>
              {props.detail.location}
            </Location>
          </PaddingBox>
          <Divider></Divider>
          <PaddingBox>
            <Description> {props.detail.description}</Description>
          </PaddingBox>
          <Divider></Divider>
          <PaddingBox>
            <Flex gap="150px">
              <div>
                <Flex gap="10px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    width="20px"
                    height="20px"
                  >
                    <path d="M13.688.311L8.666 0 0 8.665 5.334 14 14 5.332 13.688.311zm-2.354 1.528a.827.827 0 11-.002 1.654.827.827 0 01.002-1.654zM6.441 9.892c-.384-.016-.761-.168-1.128-.455l-.73.729-.579-.578.73-.729a3.612 3.612 0 01-.498-.872 3.186 3.186 0 01-.223-.934l.965-.331c.018.339.094.672.229 1.002.133.325.297.586.488.777.164.164.32.264.473.295s.287-.009.4-.123a.422.422 0 00.131-.315c-.004-.123-.035-.249-.094-.381s-.146-.308-.27-.52a6.892 6.892 0 01-.39-.793 1.501 1.501 0 01-.086-.7c.028-.248.157-.486.383-.714.275-.273.596-.408.971-.402.369.008.74.149 1.109.423l.682-.682.578.577-.676.677c.176.224.326.461.446.707.121.25.205.495.252.734l-.965.354a3.638 3.638 0 00-.314-.84 2.369 2.369 0 00-.419-.616.863.863 0 00-.404-.253.344.344 0 00-.342.1.438.438 0 00-.109.458c.049.18.162.427.332.739.172.31.299.582.383.807.086.226.113.465.084.714-.03.252-.161.493-.393.723-.295.297-.635.436-1.016.422z"></path>
                  </svg>{" "}
                  <div>
                    {props.detail.budget}
                    <Time style={{ marginTop: "5px" }}>Fixed-price</Time>
                  </div>
                </Flex>
              </div>
              <div>
                {" "}
                <Flex gap="10px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    width="20px"
                    height="20px"
                  >
                    <path d="M12.8 8.4l-1.3-2.3v-.8C11.6 2.4 9.2 0 6.3 0S1.1 2.4 1.1 5.3c0 1.4.5 2.6 1.4 3.5v4.5c0 .4.3.7.7.7h5.3c.4 0 .7-.3.7-.7v-1h1.7c.4 0 .7-.3.7-.7V9h.9c.4 0 .5-.3.3-.6zM8.7 5.3v.4l.7.4c-.2.5-.4.9-.8 1.3L7.9 7c-.2.2-.5.3-.8.4v.8c-.2.1-.5.1-.8.1-.3 0-.5 0-.8-.1v-.8c-.2-.1-.5-.2-.7-.4l-.7.4c-.4-.4-.7-.8-.8-1.3l.7-.4v-.9l-.7-.4c.1-.5.4-1 .8-1.3l.7.4c.2-.2.5-.3.7-.4v-.8c.3-.1.5-.1.8-.1.3 0 .5 0 .8.1v.8c.3.1.5.2.8.4l.7-.4c.4.4.6.8.8 1.3l-.7.4v.5z"></path>{" "}
                  </svg>{" "}
                  <div>
                    {props.detail.expertiseLevel}
                    <Time style={{ width: "150px", marginTop: "5px" }}>
                      I am looking for a mix of experience and value
                    </Time>
                  </div>
                </Flex>
              </div>
            </Flex>
          </PaddingBox>
          <Divider></Divider>
          <PaddingBox>
            <Title
              style={{
                fontSize: "18px",
                display: "flex",
                gap: "8px",
                margin: "0",
              }}
            >
              Project Type: <Time>{props.detail.estimatedTime}</Time>
            </Title>
          </PaddingBox>
          <Divider></Divider>
          <PaddingBox>
            <Title style={{ fontSize: "18px", margin: "0" }}>
              Skills and Expertise
            </Title>

            <SkillsCard technologiesOfItem={props.detail.technologies} />
          </PaddingBox>
          <Divider></Divider>

          <PaddingBox>
            <Title style={{ fontSize: "18px", margin: "5px 0" }}>
              Activity on this job
            </Title>
            <Time>Proposals: {props.detail.proposals}</Time>
            <Time>Interviewing: 0</Time>
            <Time>Invites sent: 0</Time>
            <Time>Unanswered invites: 0</Time>
          </PaddingBox>
        </Left>

        <Right>
          <PaddingBox>
            <Flex gap="10px">
              <Button path="/Home" title="Apply Now" bg="#108a00" TC="white" />
              <Button path="/Home"
                title="Save Job"
                bg="white"
                TC="#108a00"
              />
              
            </Flex>

            <Special style={{ marginTop: "20px", cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="20px"
                height="20px"
                fill="green"
              >
                <path
                  fillRule="evenodd"
                  d="M10.559 3.97l2.31-3.757C12.94.095 12.888 0 12.753 0H4v8h8.753c.136 0 .187-.1.116-.217l-2.31-3.814zM1.999 0h1v14H1V0h1z"
                ></path>
              </svg>
              Flag as inappropriate
            </Special>
            <Time>Send a proposal for: 6 Connects</Time>
            <Time>Available Connects: 131</Time>
          </PaddingBox>
          <Divider></Divider>
          <PaddingBox>
            <Title style={{ fontSize: "18px", margin: "5px 0" }}>
              About the client
            </Title>
            {props.detail.paymentVerified ? (
              <Time>
                <Flex align="center" gap="8px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                    width="20px"
                    height="20px"
                    fill="blue"
                  >
                    <path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path>
                  </svg>
                  Payment method verified
                </Flex>
              </Time>
            ) : (
              ""
            )}
            <Time>{props.detail.location}</Time>
            <Time>Saida 3:43 pm</Time>
            <Time>1 job posted</Time>
            <Time>100% hire rate, 1 open job</Time>
            <Time>$250 total spent</Time>
            <Time>1 hire, 0 active</Time>
            <Time>Member since May 19, 2015</Time>
          </PaddingBox>
          <Divider></Divider>
        </Right>
      </FirstBox>
    </CanvasCardBox>
  );
}
