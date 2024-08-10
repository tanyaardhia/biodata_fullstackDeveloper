import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="m-5">
      <button
        className="btn btn-error rounded-3xl text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
