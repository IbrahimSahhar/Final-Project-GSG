import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonStyled, ButtonStyledTwo } from "../../Modals/TitleModal";

export default function SkillBox(props) {
  const [skills, setSkills] = useState([]);
  const [choosenSkills, setChoosenSkills] = useState([]);
  const [selectiveSkills, setSelectiveSkills] = useState(skills);
  const [overview, setOverView] = useState("");
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        var resOne = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/skills`
        );
        if (resOne.data) {
          setSkills(resOne.data);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_CRUD_API}/personalInformation/1`
        );
        if (res.data) {
          setChoosenSkills(res.data.skills);
          setTitle(res.data.title);
          setOverView(res.data.overview);
          setRate(res.data.rate);
          setImg(res.data.image);

          const arrayOne = resOne.data;
          const arrayTwo = res.data.skills;
          const results = arrayOne.filter(
            ({ id: id1 }) => !arrayTwo.some(({ id: id2 }) => id2 === id1)
          );

          setSelectiveSkills(results);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleUpdateSkills = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_CRUD_API}/personalInformation/1`,
          {
            rate: rate,
            overview: overview,
            title: title,
            skills: choosenSkills,
            image: img,
          }
        );
        if (res) {
          navigate(0);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      <Stack spacing={3} sx={{ width: "100%" }}>
        <Autocomplete
          sx={{ width: "100%" }}
          freeSolo
          multiple
          id="tags-outlined"
          options={selectiveSkills}
          getOptionLabel={(option) => option.title}
          onChange={(e, choosenSkills) => {
            e.preventDefault();
            setChoosenSkills(choosenSkills);
          }}
          value={choosenSkills}
          filterSelectedOptions
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                style={{ background: "#219a10", color: "#fff" }}
                label={option.title}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} label="Skills" placeholder="Search Skills" />
          )}
        />
      </Stack>
      <form
        style={{ width: "fit-content", marginLeft: "auto", marginTop: "50px" }}
        onSubmit={handleUpdateSkills}
      >
        <ButtonStyledTwo type="button" onClick={props.handleClose}>
          cancel
        </ButtonStyledTwo>
        <ButtonStyled type="submit">save</ButtonStyled>
      </form>
    </>
  );
}
