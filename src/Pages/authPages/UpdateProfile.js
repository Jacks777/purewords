import React from "react";
import { Nav } from "../../Components/Nav";
import { Footer } from "../../Components/Footer";
import UpdateProfileForm from "../../Components/auth/UpdateProfileForm";

const UpdateProfile = () => {
  return (
    <>
      <Nav />
      <UpdateProfileForm />
      <Footer />
    </>
  );
};

export default UpdateProfile;
