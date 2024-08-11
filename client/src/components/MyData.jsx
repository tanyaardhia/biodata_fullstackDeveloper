import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyData({ biodataId }) {
  const navigate = useNavigate();
  
  console.log(biodataId, "biodataId from props");
  
  const handleNavigation = () => {
    if (biodataId) {
      console.log(biodataId, "Navigating to");
      navigate(`/myBiodata/${biodataId}`);
    } else {
      console.error("Biodata ID is undefined");
    }
  };

  return (
    <div className="m-5">
      <button
        onClick={handleNavigation}
        className="btn btn-primary rounded-3xl text-white"
      >
        My Data
      </button>
    </div>
  );
}
