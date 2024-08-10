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
      <div className="flex flex-col items-center mt-10">
        <img
          src="/logo.png"
          alt="PT Edi Indonesia"
          className="h-32 w-32 mb-4"
        />

        <h1 className="text-3xl font-bold text-center text-[#07074D] mb-8">
          Data Pribadi Pelamar
        </h1>

        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <form>
            {/* posisi */}
            <div className="mb-6">
              <label
                htmlFor="position"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* fullname */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* no ktp */}
            <div className="mb-6">
              <label
                htmlFor="no_ktp"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                ID Number
              </label>
              <input
                type="number"
                name="no_ktp"
                id="no_ktp"
                placeholder="Enter your ID Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* birth place */}
            <div className="mb-6">
              <label
                htmlFor="birthPlace"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Birth Place
              </label>
              <input
                type="text"
                name="birthPlace"
                id="birthPlace"
                placeholder="Enter your Birth Place"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* date of birth */}
            <div className="mb-6">
              <label
                htmlFor="date_of_birth"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* gender */}
            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              >
                <option value="">Select your gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            {/* religion */}
            <div className="mb-6">
              <label
                htmlFor="religion"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Religion
              </label>
              <input
                type="text"
                name="religion"
                id="religion"
                placeholder="Enter your Religion"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* blood type */}
            <div className="mb-6">
              <label
                htmlFor="blood_type"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Blood Type
              </label>
              <input
                type="text"
                name="blood_type"
                id="blood_type"
                placeholder="Enter your Blood Type"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* status */}
            <div className="mb-6">
              <label
                htmlFor="status"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Status
              </label>
              <input
                type="text"
                name="status"
                id="status"
                placeholder="Enter your Status"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* domicile address */}
            <div className="mb-6">
              <label
                htmlFor="address_ktp"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Domicile Address
              </label>
              <textarea
                name="address_ktp"
                id="address_ktp"
                placeholder="Enter your Domicile Address"
                rows="4"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              ></textarea>
            </div>

            {/* current address */}
            <div className="mb-6">
              <label
                htmlFor="address_residence"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Current Address
              </label>
              <textarea
                name="address_residence"
                id="address_residence"
                placeholder="Enter your Current Address"
                rows="4"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              ></textarea>
            </div>

            {/* email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* phone number */}
            <div className="mb-6">
              <label
                htmlFor="no_telp"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="no_telp"
                id="no_telp"
                placeholder="Enter your Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* emergency contact */}
            <div className="mb-6">
              <label
                htmlFor="emergency_contact"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Emergency Contact
              </label>
              <input
                type="text"
                name="emergency_contact"
                id="emergency_contact"
                placeholder="Enter Emergency Contact"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* pendidikan */}
            <div className="mb-6">
              <label
                htmlFor="education"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Education
              </label>
              <table className="w-full border border-[#e0e0e0]">
                <thead>
                  <tr>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Last Education
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Institution
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Major
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Year
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#e0e0e0] py-2 px-4">
                      <input
                        type="text"
                        name="level_of_education"
                        id="level_of_education"
                        placeholder="Last Education"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                      <input
                        type="text"
                        name="level_of_education"
                        id="level_of_education"
                        placeholder="Last Education"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                      <input
                        type="text"
                        name="level_of_education"
                        id="level_of_education"
                        placeholder="Last Education"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                    </td>
                    <td className="border border-[#e0e0e0] py-2 px-4">
                      <input
                        type="text"
                        name="name_institution"
                        id="name_institution"
                        placeholder="Name of Institute"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                      <input
                        type="text"
                        name="name_institution"
                        id="name_institution"
                        placeholder="Name of Institute"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                      <input
                        type="text"
                        name="name_institution"
                        id="name_institution"
                        placeholder="Name of Institute"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                    </td>
                    <td className="border border-[#e0e0e0] py-2 px-4">
                      <input
                        type="text"
                        name="major"
                        id="major"
                        placeholder="Major"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                      <input
                        type="text"
                        name="major"
                        id="major"
                        placeholder="Major"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                      <input
                        type="text"
                        name="major"
                        id="major"
                        placeholder="Major"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                    </td>
                    <td className="border border-[#e0e0e0] py-2 px-4">
                      <input
                        type="text"
                        name="year_graduated"
                        id="year_graduated"
                        placeholder="Year Graduated"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                      <input
                        type="text"
                        name="year_graduated"
                        id="year_graduated"
                        placeholder="Year Graduated"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                      <input
                        type="text"
                        name="year_graduated"
                        id="year_graduated"
                        placeholder="Year Graduated"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                    </td>
                    <td className="border border-[#e0e0e0] py-2 px-4">
                      <input
                        type="text"
                        name="garde"
                        id="garde"
                        placeholder="IPK"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                      />
                      <input
                        type="text"
                        name="garde"
                        id="garde"
                        placeholder="IPK"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                      <input
                        type="text"
                        name="garde"
                        id="garde"
                        placeholder="IPK"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] mt-3"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* expected salary */}
            <div className="mb-6">
              <label
                htmlFor="expected_salary"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Expected Salary
              </label>
              <input
                type="number"
                name="expected_salary"
                id="expected_salary"
                placeholder="Enter your Expected Salary"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* signature */}
            <div className="mb-6">
              <label
                htmlFor="signature"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Signature
              </label>
              <input
                type="text"
                name="signature"
                id="signature"
                placeholder="Enter your Signature"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
              />
            </div>

            {/* submit button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-[#134B70] text-white py-3 px-6 rounded-md hover:bg-[#508C9B] focus:outline-none focus:ring-2 focus:ring-[#508C9B] focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
