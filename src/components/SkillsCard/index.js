import React from 'react'
import styled from 'styled-components';


 const Styledskill = styled.p`
   display: inline-block;
   background-color: #eeeeee;
   border-radius: 10px;
   padding: 5px 10px;
   margin: 6px 2px;
   color: #222;
   transition: all .1s linear;

   &:hover {
     background-color: #9b9b9f;
   }
 `;

const SkillsContainer = styled.div`
 display:flex;
 align-items: center;
 gap: 5px;
 flex-wrap: wrap;
 `
export default function SkillsCard({ technologiesOfItem }) {
return (
  <SkillsContainer>
    {technologiesOfItem?.map((techItem, index) => (
      <Styledskill key={index}>{techItem}</Styledskill>
    ))}
  </SkillsContainer>
);}
