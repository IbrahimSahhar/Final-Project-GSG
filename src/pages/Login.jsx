import React from "react";
import Container from "../components/Container";
import FormFooter from "../components/FormFooter";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { motion as m } from "framer-motion";

export default function Login() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header login />
        <LoginForm />
        <FormFooter />
      </Container>
    </m.div>
  );
}
