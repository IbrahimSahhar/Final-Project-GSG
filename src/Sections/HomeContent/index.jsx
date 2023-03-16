import React from "react";
import styled from "styled-components";
import Jobs from "../../components/Jobs";
import ProfileInfo from "../../components/ProfileInfo";
import SearchInput from "../../components/SearchInput";
import WelcomingBanner from "../../components/WelcomingBanner";
import { useAuthContext } from "./../../context/AuthContext";

const HomeContentBox = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  gap: 35px;
`;

const LeftContent = styled.div``;

const RightContent = styled.div`
  width: 25%;
`;

const RecentSearches = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  & h4 {
    font-weight: 500;
  }
  font-family: "Neue Montreal", "Helvetica Neue", Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 16px;

  color: #001e00;
  margin-bottom: 30px;
`;

const SearchValue = styled.span`
  font-size: 13px;
  color: #108a00;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #14a800;
  }
`;
export default function HomeContent() {
  const { searchValue } = useAuthContext();

  return (
    <HomeContentBox>
      <LeftContent>
        <WelcomingBanner />
        <SearchInput width="775px" />
        <RecentSearches>
          <h4> Recent Searches: </h4>
          {searchValue.slice(-3).map((value,index) => (
            <SearchValue key={index}> {value} </SearchValue>
          ))}
        </RecentSearches>
        <Jobs />
      </LeftContent>
      <RightContent>
        <ProfileInfo />
      </RightContent>
    </HomeContentBox>
  );
}
