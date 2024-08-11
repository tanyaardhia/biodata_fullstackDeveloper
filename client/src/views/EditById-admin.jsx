import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from 'primereact/toast';

export default function EditByIdAdmin() {
  const { id } = useParams();
  // console.log("id di editt>>> ", id);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    position: "",
    name: "",
    no_ktp: "",
    birthPlace: "",
    date_of_birth: "",
    gender: "",
    religion: "",
    blood_type: "",
    status: "",
    address_ktp: "",
    address_residence: "",
    no_telp: "",
    email: "",
    contact_emergency: "",
    skill: "",
    willing_to_be_placed: "",
    signature: "",
    Education: [],
    Trainings: [],
    WorkExperiences: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    console.log("submitting data>> ", formData);
    try {
      await axios.put(
        `http://localhost:3000/admin/database/edit/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "data successfully updated!",
      });
      navigate(`/admin/database/${id}`);
    } catch (error) {
      console.error("error updating data:", error);
      setError("error updating data");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async (id) => {
    try {
      // console.log("masuk fetch dataaaa");

      const response = await axios.get(
        `http://localhost:3000/admin/database/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      // console.log("id di editt get>>> ", id);
      // console.log("fetched data:", response.data);
      setFormData(response.data);
    } catch (error) {
      console.error(
        "error fetching data>> ",
        error.response?.data || error.message
      );
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleArrayChange = (e, index, arrayName) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedArray = [...prevData[arrayName]];
      updatedArray[index] = { ...updatedArray[index], [name]: value };
      return { ...prevData, [arrayName]: updatedArray };
    });
  };

  const addField = (arrayName) => {
    const defaultValues = {
      Education: {
        level_of_education: "",
        name_institution: "",
        major: "",
        year_graduated: "",
        grade: "",
      },
      Trainings: {
        course_name: "",
        certificate: "",
        year: "",
      },
      WorkExperiences: {
        company_name: "",
        last_position: "",
        last_revenue: "",
        year: "",
      },
    };
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: [...prevData[arrayName], defaultValues[arrayName]],
    }));
  };

  const removeField = (index, arrayName) => {
    setFormData((prevData) => ({
      ...prevData,
      [arrayName]: prevData[arrayName].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="sm:ml-64 flex items-center justify-center p-4">
      <Toast ref={toast} />
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            alt="PT Edi Indonesia"
            className="h-32 w-32 mb-4"
          />

          <h1 className="text-3xl font-bold text-center text-[#07074D] mb-8">
            Edit Form Candidate
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Position */}
          <div className="mb-6">
            <label
              htmlFor="position"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              id="position"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
            {error && error.position && (
              <p className="text-red-500">{error.position}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
            {error && error.name && (
              <p className="text-red-500">{error.name}</p>
            )}
          </div>

          {/* no ktp */}
          <div className="mb-6">
            <label
              htmlFor="no_ktp"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              ID Number
            </label>
            <input
              type="text"
              name="no_ktp"
              value={formData.no_ktp}
              onChange={handleChange}
              id="no_ktp"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* birth place */}
          <div className="mb-6">
            <label
              htmlFor="birthPlace"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Birth Place
            </label>
            <input
              type="text"
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              id="birthPlace"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* date_of_birth */}
          <div className="mb-6">
            <label
              htmlFor="date_of_birth"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date of Birth
            </label>
            <input
              type="text"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              id="date_of_birth"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* gender */}
          <div className="mb-6">
            <label
              htmlFor="gender"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              id="gender"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* religion */}
          <div className="mb-6">
            <label
              htmlFor="religion"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Religion
            </label>
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              id="religion"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* blood_type */}
          <div className="mb-6">
            <label
              htmlFor="blood_type"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Blood Type
            </label>
            <input
              type="text"
              name="blood_type"
              value={formData.blood_type}
              onChange={handleChange}
              id="blood_type"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* status */}
          <div className="mb-6">
            <label
              htmlFor="status"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Status
            </label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
              id="status"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* address_ktp */}
          <div className="mb-6">
            <label
              htmlFor="address_ktp"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Domicile Address
            </label>
            <input
              type="text"
              name="address_ktp"
              value={formData.address_ktp}
              onChange={handleChange}
              id="address_ktp"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* current address */}
          <div className="mb-6">
            <label
              htmlFor="address_residence"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Current Address
            </label>
            <input
              type="text"
              name="address_residence"
              value={formData.address_residence}
              onChange={handleChange}
              id="address_residence"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* no_telp */}
          <div className="mb-6">
            <label
              htmlFor="no_telp"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="no_telp"
              value={formData.no_telp}
              onChange={handleChange}
              id="no_telp"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* contact_emergency */}
          <div className="mb-6">
            <label
              htmlFor="contact_emergency"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Emergency Contact
            </label>
            <input
              type="text"
              name="contact_emergency"
              value={formData.contact_emergency}
              onChange={handleChange}
              id="contact_emergency"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* Education  */}
          <div className="mb-5">
            <h3 className="mb-3 block text-base font-medium text-[#07074D]">
              Education
            </h3>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Level
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Institution
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Major
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Year
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.Education.map((field, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="level_of_education"
                        value={field.level_of_education}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Education")
                        }
                        placeholder="Level of Education"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="name_institution"
                        value={field.name_institution}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Education")
                        }
                        placeholder="Institution Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="major"
                        value={field.major}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Education")
                        }
                        placeholder="Major"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="year_graduated"
                        value={field.year_graduated}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Education")
                        }
                        placeholder="Year Graduated"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="grade"
                        value={field.grade}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Education")
                        }
                        placeholder="Grade"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        type="button"
                        onClick={() => removeField(index, "Education")}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="content-center">
                  <td colSpan="6" className="border px-4 py-2">
                    <a
                      type="button"
                      onClick={() => addField("Education")}
                      className="text-blue-600 py-2 px-4 rounded"
                    >
                      Add Education
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Trainings  */}
          <div className="mb-5">
            <h3 className="mb-3 block text-base font-medium text-[#07074D]">
              Trainings
            </h3>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Course Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Certificate
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.Trainings.map((field, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="course_name"
                        value={field.course_name}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Trainings")
                        }
                        placeholder="Course Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="certificate"
                        value={field.certificate}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Trainings")
                        }
                        placeholder="Certificate"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="year"
                        value={field.year}
                        onChange={(e) =>
                          handleArrayChange(e, index, "Trainings")
                        }
                        placeholder="Year"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        type="button"
                        onClick={() => removeField(index, "Trainings")}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" className="border px-4 py-2">
                    <a
                      type="button"
                      onClick={() => addField("Trainings")}
                      className="text-blue-600 py-2 px-4 rounded"
                    >
                      Add Training
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Work Experiences  */}
          <div className="mb-5">
            <h3 className="mb-3 block text-base font-medium text-[#07074D]">
              Work Experiences
            </h3>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Company Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Position
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Last Salary
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.WorkExperiences.map((field, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="company_name"
                        value={field.company_name}
                        onChange={(e) =>
                          handleArrayChange(e, index, "WorkExperiences")
                        }
                        placeholder="Company Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="last_position"
                        value={field.last_position}
                        onChange={(e) =>
                          handleArrayChange(e, index, "WorkExperiences")
                        }
                        placeholder="Last Position"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="last_revenue"
                        value={field.last_revenue}
                        onChange={(e) =>
                          handleArrayChange(e, index, "WorkExperiences")
                        }
                        placeholder="Last Salary"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        name="year"
                        value={field.year}
                        onChange={(e) =>
                          handleArrayChange(e, index, "WorkExperiences")
                        }
                        placeholder="Year"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-2 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        type="button"
                        onClick={() => removeField(index, "WorkExperiences")}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="5" className="border px-4 py-2">
                    <a
                      type="button"
                      onClick={() => addField("WorkExperiences")}
                      className="text-blue-600 py-2 px-4 rounded"
                    >
                      Add Work Experience
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* skill */}
          <div className="mb-6">
            <label
              htmlFor="skill"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Skills
            </label>
            <textarea
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              id="skill"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* willing_to_be_placed */}
          <div className="mb-6">
            <label
              htmlFor="willing_to_be_placed"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Willing to Relocate
            </label>
            <select
              name="willing_to_be_placed"
              value={formData.willing_to_be_placed}
              onChange={handleChange}
              id="willing_to_be_placed"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* signature */}
          <div className="mb-6">
            <label
              htmlFor="signature"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Signature
            </label>
            <input
              type="text"
              name="signature"
              value={formData.signature}
              onChange={handleChange}
              id="signature"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
