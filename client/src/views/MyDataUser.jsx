import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import axios from "axios";
import { SidebarUser } from "../components/SidebarUser";

export default function MyDataUser() {
  const [users, setUsers] = useState([]);
  const [searchCandidate, setSearchCandidate] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/my-data", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(response, ">>>>>>>>???????????");

      setUsers(response.data);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        navigate("/form-biodata");
      }

      console.error("error fetching the data!", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchCandidate.toLowerCase()) ||
      user.position.toLowerCase().includes(searchCandidate.toLowerCase())
  );

  return (
    <>
      <SidebarUser />
      <div className="p-4 sm:ml-64">
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          <h1 className="font-bold text-xl mb-4 md:mb-0">My Data</h1>
          <div className="relative max-w-md w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="flex items-center">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by name..."
                value={searchCandidate}
                onChange={(e) => setSearchCandidate(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Place Date of Birth</Table.HeadCell>
              <Table.HeadCell>Position</Table.HeadCell>
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {filteredUsers.map((user) => (
                <Table.Row
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </Table.Cell>
                  <Table.Cell>
                    {user.birthPlace}, {formatDate(user.date_of_birth)}
                  </Table.Cell>
                  <Table.Cell>{user.position}</Table.Cell>
                  <Table.Cell className="flex space-x-2">
                    <Link
                      to={`/admin/database/${user.id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      View
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
}
