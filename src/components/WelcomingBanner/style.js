import styled from "styled-components";

export const WelcomingBannerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  border: 1px solid #e4ebe4;
  padding: 5px 20px;

  & img {
    height: 120px;
  }
`;


export const Status = styled.h3`
  letter-spacing: 2px;
  font-size: 36px;
  margin-left: 10px;
  font-weight: 600;
  font-family: Rza, Rza-fallback;
`;

export const Time = styled.p`
  margin-left: 10px;
  font-size: 22px;
  font-weight: 500;
`;