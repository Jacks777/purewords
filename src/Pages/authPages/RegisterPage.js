import React from "react";
import { Nav } from "../../Components/Nav";

import { Footer } from "../../Components/Footer";
import RegisterForm from "../../Components/auth/RegisterForm";

const Register = () => {
  return (
    <>
      <Nav />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default Register;
