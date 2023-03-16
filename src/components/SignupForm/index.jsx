import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import FormBox from "../FormBox";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import * as yup from "yup";
import axios from "axios";
import { ErrorMessage, ErrorsList } from "../LoginForm";
import { StyledButton, StyledImg, StyledOR } from "../FormBox/style";
import google from "../../Images/google.svg";
import apple from "../../Images/apple.png";

const FormH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: Rza, Rza-fallback;
`;

const OR = styled.p`
  width: fit-content;
  margin: 35px auto;
  color: #606060;
  position: relative;
  font-weight: 700;
  & a {
    color: rgb(16 138 0);
  }
`;

export default function SignUpForm() {
  const {
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
    setusername,
  } = useAuthContext();

  const [Username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]);

  const schema = yup.object().shape({
    Username: yup.string().required(),
    email: yup.string().email().required(),
    Password: yup.string().min(8).required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    schema
      .validate(
        {
          Username,
          email,
          Password,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/signup`,
          {
            name: Username,
            email,
            password: Password,
          }
        );
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setusername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setIsLoading(false);
          setisAuthorized(true);
        }
      })
      .catch((e) => {
        setErrors(e.errors || [e.message]);
        setIsLoading(false);
      });
  };

  const handleChangeInput = (e, Tel) => {
    const { id, value } = e.target;
    if (id === "email") {
      SetEmail(value);
    }
    if (id === "username") {
      SetUsername(value);
    }
    if (id === "password") {
      SetPassword(value);
    }
  };

  return (
    <FormBox SubmitFunction={handleSubmit}>
      <FormH1>Sign up to find work you love</FormH1>
      <StyledButton>
        <StyledImg src={apple} alt="facebook" facebook={apple} />
        Continue with apple
      </StyledButton>
      <StyledButton facebook={apple}>
        <StyledImg src={google} alt="google" />
        Continue with Google
      </StyledButton>
      <StyledOR style={{ marginBottom: "20px" }}>
        <div></div> <span>or</span> <div></div>
      </StyledOR>
      <ErrorsList>
        {Errors.map((error, index) => {
          return <ErrorMessage key={index}>{error}</ErrorMessage>;
        })}
      </ErrorsList>

      <Input
        value={Username}
        type="text"
        id="username"
        HandleInputFunction={handleChangeInput}
      />
      <Input
        value={email}
        type="email"
        id="email"
        HandleInputFunction={handleChangeInput}
      />
      <Input
        value={Password}
        type="password"
        id="password"
        HandleInputFunction={handleChangeInput}
      />
      <SubmitButton value="Sign Up" />
      <OR>
        Already have an account? <NavLink to="/login">Log In</NavLink>
      </OR>
    </FormBox>
  );
}
