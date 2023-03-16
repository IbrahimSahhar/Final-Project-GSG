import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../../context/AuthContext";
import FormBox from "../FormBox";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import SwitchButton from "../SwitchButton";
import * as yup from "yup";
import axios from "axios";
import google from "../../Images/google.svg";
import apple from "../../Images/apple.png";
import { StyledButton, StyledImg, StyledOR } from "../FormBox/style.js";

const FormH1 = styled.h1`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const OR = styled.p`
  width: fit-content;
  margin: 35px auto;
  color: #606060;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background-color: #aeadad;
    position: absolute;
    top: 50%;
    left: -30%;
  }
  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    position: absolute;
    background-color: #aeadad;
    top: 50%;
    right: -30%;
  }
`;

export const ErrorsList = styled.ul`
  list-style: circle;
  padding: 10px;
`;

export const ErrorMessage = styled.li`
  margin-top: 5px;
  color: red;
  text-align: left;
`;

export default function LoginForm() {
  const {
    setIsLoading,
    setisAuthorized,
    setErrors,
    Errors,
    setToken,
    setusername,
  } = useAuthContext();

  const [email, SeteEmail] = useState("");
  const [Password, Setpassword] = useState("");

  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    Password: yup.string().min(8).required(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    schema
      .validate(
        {
          Password,
          email,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          `https://react-tt-api.onrender.com/api/users/login`,

          {
            email: email,
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

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    id === "email" ? SeteEmail(value) : Setpassword(value);
  };

  return (
    <FormBox SubmitFunction={handleSubmit}>
      <FormH1>Log in to Upwork</FormH1>

      <ErrorsList>
        {Errors.map((error, index) => {
          return <ErrorMessage key={index}>{error}</ErrorMessage>;
        })}
      </ErrorsList>

      <Input
        id="email"
        type="email"
        value={email}
        HandleInputFunction={handleChangeInput}
      />
      <Input
        id="password"
        type="password"
        value={Password}
        HandleInputFunction={handleChangeInput}
      />
      <SubmitButton />
      <StyledOR>
        <div></div> <span>or</span> <div></div>
      </StyledOR>

      <StyledButton facebook={apple}>
        <StyledImg src={google} alt="google" />
        Continue with Google
      </StyledButton>

      <StyledButton>
        <StyledImg src={apple} alt="facebook" facebook={apple} />
        Continue with apple
      </StyledButton>
      <OR> Don't have an Upwork account?</OR>
      <SwitchButton value="Sign Up" />
    </FormBox>
  );
}
