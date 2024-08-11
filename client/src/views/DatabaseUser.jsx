import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Table } from "flowbite-react";
import axios from "axios";

export default function DatabaseUser() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async (setUsers) => {
    try {
      const response = await axios.get("http://localhost:3000/admin/database", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/admin/database/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("There was an error deleting the user!", error);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login");
    } else {
      fetchData(setUsers);
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Nname</Table.HeadCell>
              <Table.HeadCell>place date of birth</Table.HeadCell>
              <Table.HeadCell>position</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Action</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users.map((user) => (
                <Table.Row
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </Table.Cell>
                  <Table.Cell>
                    {user.birthPlace},  {formatDate(user.date_of_birth)}
                  </Table.Cell>
                  <Table.Cell>{user.position}</Table.Cell>
                  <Table.Cell className="flex space-x-2">
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="font-medium text-red-600 hover:underline dark:text-red-500"
                    >
                      Delete
                    </button>
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
