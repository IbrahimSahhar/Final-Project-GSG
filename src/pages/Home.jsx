import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import HomeContent from "../Sections/HomeContent";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import {motion as m } from "framer-motion"

export default function Home() {
  return (
    <m.div
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      exit={{ opacity:0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header />
        <HomeContent
        />
        <ScrollButton />
        <Footer />
      </Container>
    </m.div>
  );
}
