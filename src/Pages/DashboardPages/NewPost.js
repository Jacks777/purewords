import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBottom from "../../Components/Dashboard/NavBottom";
import NewPostForm from "../../Components/Dashboard/NewPostForm";

import "../../newpost.css";

const NewPost = () => {
  return (
    <div>
      <NewPostForm />
      <NavBottom />
    </div>
  );
};

export default NewPost;
