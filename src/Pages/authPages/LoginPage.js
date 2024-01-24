import React from "react";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import LoginForm from "../../Components/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <Nav />
      <LoginForm />
      <Footer />
    </>
  );
};

export default LoginPage;
