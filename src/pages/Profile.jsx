import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import ProfileContent from "../Sections/ProfileContent";
import ScrollButton from "../components/ScrollButton";
import { motion as m } from "framer-motion";

export default function Profile() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header />
        <ProfileContent />
        <Footer />
        <ScrollButton />
      </Container>
    </m.div>
  );
}
