import { useEffect, useState } from "react";
import DetailForm from "../components/DetailForm";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyBiodata() {
  const { biodataId } = useParams();
  const [myData, setMyData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/my-data/formulir/${biodataId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setMyData(response.data);
      } catch (error) {
        console.error(
          "Error details:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchData();
  }, [biodataId]);

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
    <DetailForm
      userData={myData} 
      formatDate={formatDate}
      formatCurrency={formatCurrency}
    />
  );
}
