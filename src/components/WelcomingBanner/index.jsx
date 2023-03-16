import React from "react";
import { Status, Time, WelcomingBannerBox } from "./style";

import status from "../../Images/status.png";

export default function WelcomingBanner() {
  const today = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[today.getDay()];
  const monthOfYear = monthsOfYear[today.getMonth()];
  const dateOfMonth = today.getDate();
  const hours = today.getHours();
  const Message = hours >= 12 ? "Good Afternoon" : "Good Morning";
  const name = localStorage.getItem("name");
  const Name = name.charAt(0).toUpperCase() + name.slice(1);

  function getOrdinalSuffix(date) {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = date < 30 ? date % 20 : date % 30;
    const suffix = relevantDigits <= 3 ? suffixes[relevantDigits] : suffixes[0];
    return suffix;
  }

  return (
    <WelcomingBannerBox>
      <div>
        <Time>
          {dayOfWeek},{monthOfYear} {dateOfMonth}
          {getOrdinalSuffix(dateOfMonth)}
        </Time>
        <Status>
          {Message},{Name}
        </Status>
      </div>
      <img src={status} alt="status" />
    </WelcomingBannerBox>
  );
}
