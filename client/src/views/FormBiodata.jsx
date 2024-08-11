import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form_biodata from "../components/Form_biodata";
import { useFieldArray, useForm } from "react-hook-form";
import axios from "axios";
import { Toast } from "primereact/toast";
import { Sidebar } from "../components/Sidebar";
import { SidebarUser } from "../components/SidebarUser";

export default function FormBiodata() {
  const toast = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    control,
    reset,
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

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Successfully submitted Formulir!",
        life: 3000,
      });
      reset();
    } catch (error) {
      console.error(
        "error formulir >>",
        error.response?.data || error.message || error
      );
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Failed Sent Formulir, Please try again!",
        life: 3000,
      });
    }
  };

  // useEffect(() => {
  //   const role = localStorage.getItem("role");
  //   if (role !== "user") {
  //     navigate("/login");
  //   }
  // }, [role]);

  return (
    <>
      {" "}
      <Toast ref={toast} />
      <SidebarUser/>
      <div className="p-4 sm:ml-64">
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
      </div>
    </>
  );
}
