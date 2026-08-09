import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        👥 Registered Users
      </h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

        <table className="w-full">

          <thead className="bg-black text-white">

            <tr>
              <th className="p-4">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-4">{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {new Date(user.created_at).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Users;