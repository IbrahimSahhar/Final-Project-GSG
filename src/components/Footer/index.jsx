import React from "react";
import styled from "styled-components";
import SocialLink from "../SocialLink";

import facebook from "../../Images/face.png";
import linkedin from "../../Images/linkedin.png";
import twitter from "../../Images/tweet.png";
import youtube from "../../Images/youtube.png";
import insta from "../../Images/insta.png";
import apple1 from "../../Images/apple1.png";
import android from "../../Images/android.png";

const FooterBox = styled.div`
  border-radius: 8px;
  padding: 50px 150px;
  background-color: #001e00;
  margin-bottom: 20px;
  color: #fff;
`;

const Flex = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const UL = styled.ul`
  width: 25%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;

  & li:hover {
    text-decoration: underline;
    color: #3c8224;

    cursor: pointer;
  }
`;

const SocialBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #9aaa97;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const CopyRight = styled.p`
  width: fit-content;
  margin: auto;
  font-size: 11px;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <FooterBox>
      <Flex>
        <UL>
          <li>About Us</li>
          <li>Facebook</li>
          <li>Community</li>
        </UL>
        <UL>
          <li>Trust, Safety & Security</li>
          <li>Help & Support</li>
          <li>Upwork Foundation</li>
        </UL>
        <UL>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>CA Notice at Collection</li>
          <li>Cookie Settings</li>
        </UL>
        <UL>
          <li>Accessibility</li>
          <li>Desktop App</li>
          <li>Cookie Policy</li>
          <li>Enterprise Solutions</li>
        </UL>
      </Flex>
      <SocialBox>
        <Box>
          Follow Us
          <SocialLink icon={facebook} link="https://www.facebook.com/" />
          <SocialLink icon={linkedin} link="https://www.linkedin.com/" />
          <SocialLink icon={twitter} link="https://www.twitter.com/" />
          <SocialLink icon={youtube} link="https://www.youtube.com/" />
          <SocialLink icon={insta} link="https://www.instagram.com/" />
        </Box>
        <Box>
          Mobile app
          <SocialLink icon={apple1} link="https://www.apple.com/" />
          <SocialLink icon={android} link="https://www.android.com/" />
        </Box>
      </SocialBox>
      <CopyRight>© 2015 - 2023 Upwork® Global Inc. •</CopyRight>
    </FooterBox>
  );
}
