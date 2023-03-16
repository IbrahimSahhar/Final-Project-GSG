import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";
import { motion as m } from "framer-motion";

export default function SignUp() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header signup={true} />
        <SignUpForm />
      </Container>
    </m.div>
  );
}
