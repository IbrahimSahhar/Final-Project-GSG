import React from "react";
import { NavLink } from "react-router-dom";
import { LiMsg, LiOptions, Styledul } from "./style";

const Menus = () => {
  return (
    <Styledul>
      <li>
        <div>
          Find Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
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
              d="M18 10l-6 5-6-5"
            ></path>
          </svg>{" "}
        </div>
        <ul>
          {" "}
          <NavLink to="/Home">
            <LiOptions>Find Work</LiOptions>
          </NavLink>
          <LiOptions>Saved Jobs</LiOptions>
          <LiOptions>Proposals</LiOptions>
          <NavLink to="/Profile">
            <LiOptions>Profile</LiOptions>
          </NavLink>
          <LiOptions>My Stats</LiOptions>
          <LiOptions>My Project Dashboard</LiOptions>
        </ul>
      </li>
      <li>
        <div>
          My Jobs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
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
              d="M18 10l-6 5-6-5"
            ></path>
          </svg>{" "}
        </div>
        <ul>
          <LiOptions>My Jobs</LiOptions>
          <LiOptions>All Contracts</LiOptions>
          <LiOptions>Work Dairy</LiOptions>
        </ul>
      </li>
      <li>
        <div>
          Reports
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
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
              d="M18 10l-6 5-6-5"
            ></path>
          </svg>{" "}
        </div>

        <ul>
          <LiOptions>Overview</LiOptions>
          <LiOptions>My Reports</LiOptions>
          <LiOptions>Billing & Earnings</LiOptions>
          <LiOptions>Connects History</LiOptions>
          <LiOptions>Transaction History</LiOptions>
          <LiOptions>Certificate of Earnings</LiOptions>
        </ul>
      </li>
      <LiMsg>Messages</LiMsg>
    </Styledul>
  );
};

export default Menus;
