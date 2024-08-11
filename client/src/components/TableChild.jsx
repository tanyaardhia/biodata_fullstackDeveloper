import React from "react";

export default function TableChild({ userData, formatCurrency }) {
  const educationData = userData?.Education || [];
  const trainingData = userData?.Trainings || [];
  const workExperienceData = userData?.WorkExperiences || [];

  return (
    <div>
      {/* Education  */}
      <div className="mb-5">
        <h2 className="mb-3 block text-base font-medium text-[#07074D]">
          Education
        </h2>
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
              <th className="border border-gray-300 px-4 py-2 text-sm">Year</th>
              <th className="border border-gray-300 px-4 py-2 text-sm">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {educationData.length > 0 ? (
              educationData.map((edu) => (
                <tr key={edu.id}>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {edu.level_of_education}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {edu.name_institution}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {edu.major}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {edu.year_graduated}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {edu.grade}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="border border-gray-300 px-4 py-2 text-sm text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Trainings */}
      <div className="mb-5">
        <h2 className="mb-3 block text-base font-medium text-[#07074D]">
          Trainings
        </h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-sm">
                Course Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm">
                Certificate
              </th>
              <th className="border border-gray-300 px-4 py-2 text-sm">Year</th>
            </tr>
          </thead>
          <tbody>
            {trainingData.length > 0 ? (
              trainingData.map((training) => (
                <tr key={training.id}>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {training.course_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {training.certificate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {training.year}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 px-4 py-2 text-sm text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Work Experiences  */}
      <div className="mb-5">
        <h2 className="mb-3 block text-base font-medium text-[#07074D]">
          Work Experiences
        </h2>
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
              <th className="border border-gray-300 px-4 py-2 text-sm">Year</th>
            </tr>
          </thead>
          <tbody>
            {workExperienceData.length > 0 ? (
              workExperienceData.map((work) => (
                <tr key={work.id}>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {work.company_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {work.last_position}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {formatCurrency(work.last_revenue)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm">
                    {work.year}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-300 px-4 py-2 text-sm text-center"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
