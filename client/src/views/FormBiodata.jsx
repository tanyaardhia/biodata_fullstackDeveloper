import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form_biodata from "../components/Form_biodata";
import { useFieldArray, useForm } from "react-hook-form";
import axios from "axios";

export default function FormBiodata() {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      Education: [
        {
          level_of_education: "",
          name_institution: "",
          major: "",
          year_graduated: "",
          grade: "",
        },
      ],
      Trainings: [{ course_name: "", certificate: "", year: "" }],
      WorkExperiences: [
        { company_name: "", last_position: "", last_revenue: "", year: "" },
      ],
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "Education",
  });

  const {
    fields: trainingFields,
    append: appendTraining,
    remove: removeTraining,
  } = useFieldArray({
    control,
    name: "Trainings",
  });

  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({
    control,
    name: "WorkExperiences",
  });

  const onSubmit = async (data) => {
    try {
      console.log("Masuk formulir");
      console.log("Data formulir >>", data);

      const formulirBiodata = await axios.post(
        "http://localhost:3000/form-biodata",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      

      console.log("Response formulir >>", formulirBiodata);
    } catch (error) {
      console.error(
        "Terjadi kesalahan formulir >>",
        error.response?.data || error.message || error
      );
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "user") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Form_biodata
        register={register}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
        educationFields={educationFields}
        appendEducation={appendEducation}
        removeEducation={removeEducation}
        trainingFields={trainingFields}
        appendTraining={appendTraining}
        removeTraining={removeTraining}
        workFields={workFields}
        appendWork={appendWork}
        removeWork={removeWork}
      />
    </>
  );
}
