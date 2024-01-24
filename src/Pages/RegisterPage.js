import React from "react";
import { Nav } from "../Components/Nav";
import SearchFunction from "../Components/SearchFunction";
import { Footer } from "../Components/Footer";
import RegisterForm from "../Components/auth/RegisterForm";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <>
      <Nav />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
