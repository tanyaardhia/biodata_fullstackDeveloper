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

      // console.log("access_token >>", responseLoginUser.data.access_token);
      localStorage.setItem("access_token", responseLoginUser.data.access_token);

      localStorage.setItem("id", responseLoginUser.data.id);

      navigate("/form-biodata");
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
      title="LOG IN"
    />
  );
}
