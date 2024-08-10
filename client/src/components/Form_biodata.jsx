export default function Form_biodata({
  register,
  handleSubmit,
  onSubmit,
  errors,
  isSubmitting,
  educationFields,
  appendEducation,
  removeEducation,
  trainingFields,
  appendTraining,
  removeTraining,
  workFields,
  appendWork,
  removeWork,
}) {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <img
          src="/logo.png"
          alt="PT Edi Indonesia"
          className="h-32 w-32 mb-4"
        />

        <h1 className="text-3xl font-bold text-center text-[#07074D] mb-8">
          Applicant Personal Data
        </h1>

        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("position", {
                  required: "Position is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.position ? "border-red-500" : ""
                }`}
              />
              {errors.position && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.position.message}
                </p>
              )}
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
                {...register("name", {
                  required: "Name is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.name.message}
                </p>
              )}
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
                type="text"
                name="no_ktp"
                id="no_ktp"
                placeholder="Enter your ID Number"
                {...register("no_ktp", {
                  required: "ID Number is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.no_ktp ? "border-red-500" : ""
                }`}
              />
              {errors.no_ktp && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.no_ktp.message}
                </p>
              )}
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
                {...register("birthPlace", {
                  required: "Birth Place is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.birthPlace ? "border-red-500" : ""
                }`}
              />
              {errors.birthPlace && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.birthPlace.message}
                </p>
              )}
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
                {...register("date_of_birth", {
                  required: "Date of Birth is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.date_of_birth ? "border-red-500" : ""
                }`}
              />
              {errors.date_of_birth && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.date_of_birth.message}
                </p>
              )}
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
                {...register("gender", {
                  required: "Gender is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.gender ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.gender.message}
                </p>
              )}
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
                {...register("religion", {
                  required: "Religion is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.religion ? "border-red-500" : ""
                }`}
              />
              {errors.religion && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.religion.message}
                </p>
              )}
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
                {...register("blood_type", {
                  required: "Blood Type is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.blood_type ? "border-red-500" : ""
                }`}
              />
              {errors.blood_type && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.blood_type.message}
                </p>
              )}
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
                {...register("status", {
                  required: "Status is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />
              {errors.status && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.status.message}
                </p>
              )}
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
                {...register("address_ktp", {
                  required: "Domicile Address is required",
                })}
                rows="4"
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.address_ktp && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.address_ktp.message}
                </p>
              )}
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
                {...register("address_residence", {
                  required: "Current Address is required",
                })}
                rows="4"
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.address_residence && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.address_residence.message}
                </p>
              )}
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
                {...register("email", {
                  required: "Email is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.email.message}
                </p>
              )}
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
                {...register("no_telp", {
                  required: "Phone Number is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />{" "}
              {errors.no_telp && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.no_telp.message}
                </p>
              )}
            </div>

            {/* emergency contact */}
            <div className="mb-6">
              <label
                htmlFor="contact_emergency"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Emergency Contact
              </label>
              <input
                type="text"
                name="contact_emergency"
                id="contact_emergency"
                placeholder="Enter Emergency Contact"
                {...register("contact_emergency", {
                  required: "Emergency Contact is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />{" "}
              {errors.contact_emergency && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.contact_emergency.message}
                </p>
              )}
            </div>

            {/* Education */}
            <div className="mb-6">
              <label
                htmlFor="Education"
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
                  {educationFields.map((field, index) => (
                    <tr key={field.id}>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Last Education"
                          {...register(`education.${index}.level_of_education`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Name of Institute"
                          {...register(`education.${index}.name_institution`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Major"
                          {...register(`education.${index}.major`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Year Graduated"
                          {...register(`education.${index}.year_graduated`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Grade"
                          {...register(`education.${index}.grade`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="6" className="py-2 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => appendEducation({})}
                        className="text-blue-500 hover:underline"
                      >
                        Add Education
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Training */}
            <div className="mb-6">
              <label
                htmlFor="Trainings"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Training / Course
              </label>
              <table className="w-full border border-[#e0e0e0]">
                <thead>
                  <tr>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Course Name
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Certificate
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainingFields.map((field, index) => (
                    <tr key={field.id}>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Course Name"
                          {...register(`training.${index}.course_name`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Certificate"
                          {...register(`training.${index}.certificate`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Year"
                          {...register(`training.${index}.year`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => removeTraining(index)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="4" className="py-2 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => appendTraining({})}
                        className="text-blue-500 hover:underline"
                      >
                        Add Training
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <label
                htmlFor="WorkExperiences"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Work Experience
              </label>
              <table className="w-full border border-[#e0e0e0]">
                <thead>
                  <tr>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Company Name
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Position
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Last Salary
                    </th>
                    <th className="border border-[#e0e0e0] py-2 px-4 text-center">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workFields.map((field, index) => (
                    <tr key={field.id}>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Company Name"
                          {...register(`workExperience.${index}.company_name`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Position"
                          {...register(`workExperience.${index}.last_position`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Last Salary"
                          {...register(`workExperience.${index}.last_revenue`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4">
                        <input
                          type="text"
                          placeholder="Year"
                          {...register(`workExperience.${index}.year`)}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
                        />
                      </td>
                      <td className="border border-[#e0e0e0] py-2 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => removeWork(index)}
                          className="text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="5" className="py-2 px-4 text-center">
                      <button
                        type="button"
                        onClick={() => appendWork({})}
                        className="text-blue-500 hover:underline"
                      >
                        Add Work Experience
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* expected salary */}
            <div className="mb-6">
              <label
                htmlFor="expected_income"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Expected Salary
              </label>
              <input
                type="number"
                name="expected_income"
                id="expected_income"
                placeholder="Enter your Expected Salary"
                {...register("expected_income", {
                  required: "Expected Salary is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />
              {errors.expected_income && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.expected_income.message}
                </p>
              )}
            </div>

            {/* skill */}
            <div className="mb-6">
              <label
                htmlFor="skill"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Skills
              </label>
              <textarea
                name="skill"
                id="skill"
                placeholder="write down your expertise and the skills you currently have"
                rows="4"
                {...register("skill", {
                  required: "Skills is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.skill && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.skill.message}
                </p>
              )}
            </div>

            {/* willing_to_be_placed */}
            <div className="mb-6">
              <label
                htmlFor="willing_to_be_placed"
                className="block text-lg font-medium text-[#07074D] mb-2"
              >
                Willing to Relocated
              </label>
              <select
                name="willing_to_be_placed"
                id="willing_to_be_placed"
                {...register("willing_to_be_placed", {
                  required: "Willing to Relocated is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              >
                <option value="">Select to Relocated</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              {errors.willing_to_be_placed && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.willing_to_be_placed.message}
                </p>
              )}
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
                {...register("signature", {
                  required: "Signature is required",
                })}
                className={`w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1] ${
                  errors.status ? "border-red-500" : ""
                }`}
              />
              {errors.signature && (
                <p className="text-red-500 mt-1 text-sm italic">
                  {errors.signature.message}
                </p>
              )}
            </div>

            {/* submit button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6A64F1] text-white py-3 px-4 rounded-md hover:bg-[#4a4c9d] disabled:bg-[#9e9e9e]"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
