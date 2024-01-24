import React from "react";
import { Nav } from "../Components/Nav";
import { Footer } from "../Components/Footer";
import LoginForm from "../Components/auth/LoginForm";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <>
      <Nav />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
