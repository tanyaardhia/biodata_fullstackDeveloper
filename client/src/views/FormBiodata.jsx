import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FormBiodata() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "user") {
      navigate("/login");
    }
  }, [navigate]);

    return (
      <>
        <div>
          {/* <h1>FormBiodata</h1> */}
        </div>
      </>
    );
  }
  