import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import NavBottom from "../../Components/Dashboard/NavBottom";
import DashboardComp from "../../Components/Dashboard/DashboardComp";

export default function Dashboard() {
  const [openCheckDelete, setOpenCheckDelete] = useState(false);

  const handleToggleCheckDelete = (toggle) => {
    setOpenCheckDelete(toggle);
  };

  return (
    <>
      <DashboardComp
        openCheckDelete={openCheckDelete}
        handleToggleCheckDelete={handleToggleCheckDelete}
      />
      {!openCheckDelete && <NavBottom />}
    </>
  );
}
