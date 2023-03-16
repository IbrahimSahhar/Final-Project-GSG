import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import CanvasCard from "../components/CanvasCard";
import ScrollButton from "../components/ScrollButton";
import { motion as m } from "framer-motion";

const JobDetails = () => {
  const { id } = useParams();
  const [jobdetails, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/jobs/${id}`
        );
        if (res) {
          setJobDetails(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <m.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header />
        <CanvasCard detail={jobdetails} />
        <Footer />
        <ScrollButton />
      </Container>
    </m.div>
  );
};

export default JobDetails;
