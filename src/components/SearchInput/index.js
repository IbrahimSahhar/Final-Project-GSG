import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Iconsearch, Search } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function SearchInput(props) {
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const { searchValue, setSearchValue } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_CRUD_API}/jobs`);

        if (res) {
          setAllJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("search", search);
    const searched = [...searchValue, search];
    setSearchValue((prevState) => [...prevState, search]);
    localStorage.setItem("searchValues", JSON.stringify(searched));
    props.current ? navigate(0) : navigate("/Filter");
  };

  return (
    <Search margin={props.margin} onSubmit={handleSubmit}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allJobs.map((job) => job.title)}
        renderInput={(params) => (
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                padding: "0 10px",
                border: "none",
                width: props.width,
              },

              "& .MuiOutlinedInput-root:active": {
                border: "none",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #e4ebe4",
                width: props.width,
              },
            }}
            {...params}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for job"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Iconsearch>
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          viewBox="0 0 14 14"
          role="img"
          width="20px"
        >
          <path d="M13.655 12.004l-3.25-3.255a5.64 5.64 0 00.92-3.087c0-1.509-.589-2.93-1.66-4.001A5.626 5.626 0 005.661.002 5.666 5.666 0 000 5.661a5.67 5.67 0 005.661 5.663 5.655 5.655 0 003.093-.92l3.252 3.252c.218.221.512.344.825.344.314 0 .606-.123.824-.345.222-.219.345-.511.345-.823 0-.312-.123-.606-.345-.828zM5.661 9.549a3.89 3.89 0 01-3.885-3.888 3.89 3.89 0 013.885-3.887 3.892 3.892 0 013.888 3.887 3.892 3.892 0 01-3.888 3.888z"></path>
        </svg>
      </Iconsearch>
    </Search>
  );
}
