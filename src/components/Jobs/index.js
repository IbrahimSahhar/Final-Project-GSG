import React from 'react'
import styled from "styled-components";
import JobsTabs from '../JobsTabs';

 const JobsBox = styled.div`
  border: 1px solid #e4ebe4;
  margin-top: 16px;
  border-radius: 15px;
  margin-bottom: 50px;
`;
 const Title = styled.h3`
  letter-spacing: 2px;
  font-size: 28px;
  margin-left: 10px;
  font-weight: 700;
  padding: 10px;
`;

export default function Jobs() {
   return (
     <JobsBox>
       <Title>Jobs you might like</Title>
       <JobsTabs />
     </JobsBox>
   );
}
