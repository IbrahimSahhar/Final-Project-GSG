import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
import { GreenText } from "../../components/ProfileInfo";
import JobCard from "../../components/JobCard";
import uparrow from "../../Images/upArrow.png";
import Checkbox from "../../components/Checkbox";

const FilterBox = styled.div`
  display: flex;
  margin: 30px 0;
  gap: 15px;
`;

const Left = styled.div`
  width: 25%;
`;
const Right = styled.div`
  width: 75%;
  border: 1px solid #e4ebe4;
  border-radius: 15px;
`;

const Filters = styled.div`
  padding: 10px 25px;
`;

const Title = styled.h3`
  padding: 20px;
  border-bottom: 2px solid black;
  width: fit-content;
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
  margin-bottom: 10px;
`;

const P = styled.p`
  font-size: 15px;
  margin: 10px 10px 0;
  display: flex;
  gap: 10px;
  color: #3e523e;
  background-color: #d3d3d3;
  padding: 10px 5px;
  width: fit-content;
`;

export const AccordionCardBox = styled.div`
  padding: 14px 0px 15px;
  border-bottom: 1px solid #e3e8ee;
`;

export const AccordionName = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  display: ${(props) => (props.display === "block" ? "block" : "none")};
  padding-top: 24px;
`;

const H2 = styled.h2`
  font-weight: 500;
`;
export default function FilterContent(props) {
  const [categoryDisplay, setcategoryDisplay] = useState("none");
  const [ExperienceLevel, setExperienceLevel] = useState("none");
  const [JobType, setJobType] = useState("none");
  const [proposals, setproposals] = useState("none");
  const [ClientInfo, setClientInfo] = useState("none");
  const [ClientHistory, setClientHistory] = useState("none");
  const [ClientLocation, setClientLocation] = useState("none");
  const [ClientZone, setClientZone] = useState("none");
  const [ProjectLength, setProjectLength] = useState("none");
  const [Hours, setHours] = useState("none");
  const [Connects, setConnects] = useState("none");

  return (
    <div>
      <Container width="90%">
        <FilterBox>
          <Left>
            <H2>Filter By</H2>
            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setcategoryDisplay((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Category
                <img
                  style={
                    categoryDisplay === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={categoryDisplay === "none" ? "none" : "block"}
              >
                <Checkbox id="Test" title="test" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setExperienceLevel((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Experience level
                <img
                  style={
                    ExperienceLevel === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ExperienceLevel === "none" ? "none" : "block"}
              >
                <Checkbox id="Entry Level" title="Entry Level" />
                <Checkbox id="Intermediate" title="Intermediate" />
                <Checkbox id="Expert" title="Expert" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setJobType((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Job type
                <img
                  style={
                    JobType === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent display={JobType === "none" ? "none" : "block"}>
                <Checkbox id="Expert" title="Expert" />
                <Checkbox id="Hourly" title="Hourly" />
                <Checkbox id="Fixed-Price" title="Fixed-Price" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setproposals((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Number of proposals
                <img
                  style={
                    proposals === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={proposals === "none" ? "none" : "block"}
              >
                <Checkbox id="Less than 5" title="Less than 5" />
                <Checkbox id="5 to 10" title="5 to 10" />
                <Checkbox id="10 to 15" title="10 to 15" />
                <Checkbox id="15 to 20" title="15 to 20" />
                <Checkbox id="20 to 50 " title="20 to 50 " />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setClientInfo((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Client info
                <img
                  style={
                    ClientInfo === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ClientInfo === "none" ? "none" : "block"}
              >
                <Checkbox
                  id="My previous clients "
                  title="My previous clients"
                />
                <Checkbox id="Payment verified " title="Payment verified " />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setClientHistory((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Client history
                <img
                  style={
                    ClientHistory === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ClientHistory === "none" ? "none" : "block"}
              >
                <Checkbox id="No hires " title="No hires" />
                <Checkbox id="1 to 9 hires" title="1 to 9 hires" />
                <Checkbox id="10+ hires" title="10+ hires" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setClientLocation((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Client location
                <img
                  style={
                    ClientLocation === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ClientLocation === "none" ? "none" : "block"}
              >
                <Checkbox id="test" title="tests" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setClientZone((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Client time zones
                <img
                  style={
                    ClientZone === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ClientZone === "none" ? "none" : "block"}
              >
                <Checkbox id="test" title="tests" />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setProjectLength((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Project length
                <img
                  style={
                    ProjectLength === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={ProjectLength === "none" ? "none" : "block"}
              >
                <Checkbox
                  id="Less than one month "
                  title="Less than one month "
                />
                <Checkbox id="1 to 3 months" title="1 to 3 months" />
                <Checkbox id="3 to 6 months" title="3 to 6 months" />
                <Checkbox
                  id="More than 6 months "
                  title="More than 6 months "
                />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setHours((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Hours per week
                <img
                  style={
                    Hours === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent display={Hours === "none" ? "none" : "block"}>
                <Checkbox
                  id="Less than 30 hrs/week"
                  title="Less than 30 hrs/week"
                />
                <Checkbox
                  id="More than 30 hrs/week"
                  title="More than 30 hrs/week"
                />
              </AccordionContent>
            </AccordionCardBox>

            <AccordionCardBox>
              <AccordionName
                onClick={() =>
                  setConnects((prevstate) =>
                    prevstate === "block" ? "none" : "block"
                  )
                }
              >
                Connects needed
                <img
                  style={
                    Connects === "none"
                      ? { cursor: "pointer", transform: "rotate(180deg)" }
                      : { cursor: "pointer" }
                  }
                  src={uparrow}
                  alt="uparrow icon"
                />
              </AccordionName>
              <AccordionContent
                display={Connects === "none" ? "none" : "block"}
              >
                <Checkbox id="2 or less connects" title="2 or less connects" />{" "}
                <Checkbox id="4 connects" title="4 connects" />
                <Checkbox id="6 connects" title="6 connects" />
              </AccordionContent>
            </AccordionCardBox>
            <Checkbox
              id="Contract-to-hire roles"
              title="Contract-to-hire roles"
            />
          </Left>
          <Right>
            <Filters>
              <Title>Search</Title>
              <Flex>
                <SearchInput current={props.current?true:false} width="550px" />
                <Button bg="white" TC="#108a00" title="Save search" />
              </Flex>
              <GreenText NoPadding>Advanced Search</GreenText>
              <P>
                {" "}
                <span>{props.jobs.length}</span> jobs found
              </P>
            </Filters>

            {props.jobs?.map((detail) => (
              <JobCard
                key={detail.id}
                id={detail.id}
                title={detail.title}
                hourlyRate={detail.hourlyRate}
                expertiseLevel={detail.expertiseLevel}
                estimatedTime={detail.estimatedTime}
                hoursPerWeek={detail.hoursPerWeek}
                budget={detail.budget}
                posted={detail.posted}
                description={detail.description}
                proposals={detail.proposals}
                amountSpent={detail.amountSpent}
                location={detail.location}
                technologies={detail.technologies}
                detail={detail}
              />
            ))}
          </Right>
        </FilterBox>
      </Container>
    </div>
  );
}
