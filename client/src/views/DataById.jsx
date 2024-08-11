import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DataById() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/admin/database/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
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

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        {/* Position */}
        <div className="mb-5">
          <label
            htmlFor="position"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            value={userData.position || ""}
            placeholder="Position"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Full Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name || ""}
            placeholder="Full Name"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* ID Number */}
        <div className="mb-5">
          <label
            htmlFor="no_ktp"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            ID Number
          </label>
          <input
            type="text"
            name="no_ktp"
            id="no_ktp"
            value={userData.no_ktp || ""}
            placeholder="Enter your ID Number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Birth Place */}
        <div className="mb-5">
          <label
            htmlFor="birthPlace"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Birth Place
          </label>
          <input
            type="text"
            name="birthPlace"
            id="birthPlace"
            value={userData.birthPlace || ""}
            placeholder="Enter your Birth Place"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-5">
          <label
            htmlFor="date_of_birth"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Date of Birth
          </label>
          <input
            type="text"
            name="date_of_birth"
            id="date_of_birth"
            value={
              userData.date_of_birth ? formatDate(userData.date_of_birth) : ""
            }
            placeholder="Enter your Date of Birth"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={userData.no_telp || ""}
            placeholder="Enter your phone number"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Email Address */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email || ""}
            placeholder="Enter your email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Gender */}
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={userData.gender || ""}
            placeholder="Enter your Gender"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Religion */}
        <div className="mb-5">
          <label
            htmlFor="religion"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Religion
          </label>
          <input
            type="text"
            name="religion"
            id="religion"
            value={userData.religion || ""}
            placeholder="Enter your Religion"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Blood Type */}
        <div className="mb-5">
          <label
            htmlFor="blood_type"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Blood Type
          </label>
          <input
            type="text"
            name="blood_type"
            id="blood_type"
            value={userData.blood_type || ""}
            placeholder="Enter your Blood Type"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Status */}
        <div className="mb-5">
          <label
            htmlFor="status"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Status
          </label>
          <input
            type="text"
            name="status"
            id="status"
            value={userData.status || ""}
            placeholder="Enter your Status"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Address KTP */}
        <div className="mb-5">
          <label
            htmlFor="address_ktp"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Domicile Address
          </label>
          <input
            type="text"
            name="address_ktp"
            id="address_ktp"
            value={userData.address_ktp || ""}
            placeholder="Enter your Address (KTP)"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Address Residence */}
        <div className="mb-5">
          <label
            htmlFor="address_residence"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Current Address
          </label>
          <input
            type="text"
            name="address_residence"
            id="address_residence"
            value={userData.address_residence || ""}
            placeholder="Enter your Address (Residence)"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Emergency Contact */}
        <div className="mb-5">
          <label
            htmlFor="contact_emergency"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Emergency Contact
          </label>
          <input
            type="text"
            name="contact_emergency"
            id="contact_emergency"
            value={userData.contact_emergency || ""}
            placeholder="Enter your Emergency Contact"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Expected Income */}
        <div className="mb-5">
          <label
            htmlFor="expected_income"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Expected Salary
          </label>
          <input
            type="text"
            name="expected_income"
            id="expected_income"
            value={userData.expected_income || ""}
            placeholder="Enter your Expected Income"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Skill */}
        <div className="mb-5">
          <label
            htmlFor="skill"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Skill
          </label>
          <input
            type="text"
            name="skill"
            id="skill"
            value={userData.skill || ""}
            placeholder="Enter your Skill"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Willing to be Placed */}
        <div className="mb-5">
          <label
            htmlFor="willing_to_be_placed"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Willing to be Placed
          </label>
          <input
            type="text"
            name="willing_to_be_placed"
            id="willing_to_be_placed"
            value={userData.willing_to_be_placed || ""}
            placeholder="Willing to be Placed"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>

        {/* Signature */}
        <div className="mb-5">
          <label
            htmlFor="signature"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Signature
          </label>
          <input
            type="text"
            name="signature"
            id="signature"
            value={userData.signature || ""}
            placeholder="Enter your Signature"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
