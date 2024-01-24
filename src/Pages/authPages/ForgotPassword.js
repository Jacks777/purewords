import React from "react";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import ForgotPasswordForm from "../../Components/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <>
      <Nav />
      <ForgotPasswordForm />
      <Footer />
    </>
  );
}
