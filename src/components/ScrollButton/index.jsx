import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showScrollButton && (
        <ScrollTo onClick={handleScrollToTop}> To Top ^</ScrollTo>
      )}
    </>
  );
};

const ScrollTo = styled.div`
  width: fit-content;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding:8px;
  color: black;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  position: fixed;
  bottom: 20px;
  right: 60px;
  border: 1px solid #108a00;
  cursor: pointer;
`;

export default ScrollButton;
