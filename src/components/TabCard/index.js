import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { useJobContext } from "../../context/jobContext";
import styled from "styled-components";

import saved from "../../Images/saved.png";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 35px;
`;

 const Button = styled.button`
  border: 3px solid green;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px ;
  width: fit-content;
  margin: auto;
  display: block;
  color: green;
  font-size: 16px;
  text-transform: capitalize;
  margin: 35px auto;
`;

const P = styled.span`
padding:10px 35px;
display: block;
`

export default function TabCard(props) {
  const { state } = useJobContext();
  const [BestMatches, setBestMatches] = useState([]);

  const [count, setCount] = useState(3);

  const handleCount = () => {
    setCount((prevState) => prevState + 3);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/jobs?_sort=id&_order=desc_page=1&_limit=${count}`
        );

        if (res) {
          setBestMatches(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [count]);

  if (props.bestMatches) {
    return (
      <>
        <P>{props.title}</P>
        {BestMatches?.map((detail) => (
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

        <Button
          onClick={handleCount}
          variant="outlined"
          color="success"
          sx={{ borderRadius: "6px", margin: "10px 300px" }}
        >
          load more jobs
        </Button>
      </>
    );
  }

  if (props.mostRecent) {
    return (
      <div>
        <P>{props.title}</P>
        {BestMatches?.map((detail) => (
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
        <Button
          onClick={handleCount}
          variant="outlined"
          color="success"
          sx={{ borderRadius: "6px", margin: "10px 300px" }}
        >
          load more jobs
        </Button>
      </div>
    );
  }

  if (props.savedJobs) {
    return (
      <div>
        {state.jobs.length > 0 ? (

          state.jobs?.map((detail) => (
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
          )
          
          
          )
        ) : (
          <>
            <Center>
              <img width="200px" src={saved} alt="saved" />
              <p>{props.title}</p>
            </Center>
          </>
        )}

        


      </div>
    );
  }
}
