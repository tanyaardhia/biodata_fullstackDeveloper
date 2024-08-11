import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Form from "../components/Form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log("masuk login");
      console.log("data before login >>", data);

      const responseLoginUser = await axios.post(
        "http://localhost:3000/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      // console.log("login successful >>", responseLoginUser.data);
      // console.log("id >>", responseLoginUser.data.id);
      console.log("User type on login:", responseLoginUser.data.role);

      // console.log("access_token >>", responseLoginUser.data.access_token);
      localStorage.setItem("access_token", responseLoginUser.data.access_token);
      localStorage.setItem("id", responseLoginUser.data.id);
      localStorage.setItem("role", responseLoginUser.data.role);

      if (responseLoginUser.data.role === "admin") {
        navigate("/admin/database");
      } else {
        navigate("/form-biodata");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
      subTitle="welcome back"
      title="LOG IN" userType="admin" 
    />
  );
}
