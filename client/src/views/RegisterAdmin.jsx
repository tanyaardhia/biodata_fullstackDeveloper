import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function RegisterUser() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("register masukk");
      const responseRegisterUser = await axios.post(
        "http://localhost:3000/admin/register",
        data
      );
      console.log(responseRegisterUser, ">> data reg admin");
      navigate("/login");
    } catch (error) {
      console.log(error, "error register admin");
    }
  };
  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      title="REGISTER"
      isSubmitting={isSubmitting}
      subTitle="for admin only"
    />
  );
}
