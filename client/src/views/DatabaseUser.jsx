import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DatabaseUser() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login"); 
    }
  }, [navigate]);
  return (
    <>
      <div>
        {/* <h1>DatabaseUser</h1> */}
      </div>
    </>
  );
}
