import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DetailForm from "../components/DetailForm";

export default function DataById() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const role = localStorage.getItem("role");
        setUserRole(role);

        const endpoint =
          role === "admin"
            ? `http://localhost:3000/admin/database/${id}`
            : `http://localhost:3000/my-data/formulir/${id}`;

        const response = await axios.get(endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log(response.data, "?????????????data");

        setUserData(response.data);
      } catch (error) {
        console.error("error fetching the data!", error);
      }
    };

    fetchData();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="p-4 sm:ml-64">
      {userRole === "admin" && (
        <button className="btn btn-primary rounded-3xl text-white justify-end">
          <Link to={`/admin/database/edit/${id}`}>Edit</Link>
        </button>
      )}

      <DetailForm
        userData={userData}
        formatDate={formatDate}
        formatCurrency={formatCurrency}
      />
    </div>
  );
}
