import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import FilterContent from "../Sections/FilterContent";
import { motion as m } from "framer-motion";

export default function Filter() {
  const [filterredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    (async () => {
      const q = localStorage.getItem("search");

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/jobs?title_like=${q}`
        );

        if (res) {
          setFilteredJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Container>
        <Header current={true} />
        <FilterContent current={true} jobs={filterredJobs} />
        <Footer />
        <ScrollButton />
      </Container>
      ;
    </m.div>
  );
}
