import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SkillsCard from "../SkillsCard";
import { useJobContext } from "../../context/jobContext";
import TemporaryDrawer from "../Canvas";

export const Cardjob = styled.span`
  display: block;
  position: relative;
  padding: 35px;
  border-bottom: 1px solid rgb(228, 235, 228);
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    & h3 {
      color: #3c8224;
    }
  }
`;

export const JobTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Jobdetail = styled.div`
  font-size: 14px;
  display: flex;
  color: #888;
  gap: 2px;
`;

export const JobDescription = styled.p`
  line-height: 22px;
  letter-spacing: 2px;
  margin: 8px 0;
`;

const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid green;
  border-radius: 50%;
  z-index: 5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  z-index: 999999999;
  color: green;
  background-color: #fefefe;
  display: block;
  width: fit-content;
`;

export default function JobCard(props) {
  const { state, addToSaved, removeFromSaved } = useJobContext();
  const [FullDescription, setFullDescription] = useState(false);

  const toggleDescription = () => {
    setFullDescription(!FullDescription);
  };

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(state.jobs));
    localStorage.setItem("count", state.count);
  }, [state.jobs, state.count]);

  const handleAddRemoveJob = async (detail) => {
    if (state.jobs.find((item) => item.id === detail.id)) {
      removeFromSaved(detail.id);
    } else {
      addToSaved(detail);
    }
  };
  return (
    <Cardjob>
      <TemporaryDrawer detail={props.detail}>
        <JobTitle>{props.title}</JobTitle>
        <Jobdetail>
          {props.hourlyRate} - {props.expertiseLevel} - Est.
          {props.estimatedTime},{props.hoursPerWeek} - Budget:
          {props.budget} - Posted in:{props.posted}
        </Jobdetail>
      </TemporaryDrawer>

      <JobDescription>
        <TemporaryDrawer detail={props.detail}>
          {FullDescription
            ? props.description
            : `${props.description.slice(0, 200)}.. `}
        </TemporaryDrawer>

        <Span type="button" onClick={toggleDescription}>
          {FullDescription ? "  Less" : "  See More"}
        </Span>
      </JobDescription>
      <TemporaryDrawer detail={props.detail}>
        <SkillsCard technologiesOfItem={props.technologies} />

        <span style={{ display: "block" }}>Proposals: {props.proposals}</span>
        <span style={{ display: "block" }}>
          {props.amountSpent} spent {props.location}
        </span>
      </TemporaryDrawer>

      <Button onClick={() => handleAddRemoveJob(props.detail)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="20px"
        >
          {state.jobs.find((item) => item.id === props.detail.id) ? (
            <path
              fillRule="evenodd"
              fill="green"
              d="M7 3.646C7 1.632 5.433 0 3.5 0S0 1.632 0 3.646c0 .813.256 1.566.689 2.172L7 14l6.311-8.182A3.73 3.73 0 0014 3.646C14 1.632 12.433 0 10.5 0S7 1.632 7 3.646"
            ></path>
          ) : (
            <path
              fillRule="evenodd"
              fill="green"
              d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"
            ></path>
          )}
        </svg>
      </Button>
    </Cardjob>
  );
}
