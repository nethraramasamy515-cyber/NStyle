import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://nstyle-backend.onrender.com";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= LOAD USERS =================

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/users`
      );

      setUsers(res.data);
    } catch (err) {
      console.log("Users Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          👥 Registered Users
        </h1>

        {/* LOADING */}

        {loading ? (

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <p className="text-xl font-semibold">
              Loading Users...
            </p>

          </div>

        ) : users.length === 0 ? (

          /* NO USERS */

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <div className="text-6xl mb-4">
              👥
            </div>

            <h2 className="text-2xl font-bold">
              No Users Found
            </h2>

            <p className="text-gray-500 mt-2">
              No registered users are available.
            </p>

          </div>

        ) : (

          /* USERS TABLE */

          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">

            <table className="w-full">

              <thead className="bg-black text-white">

                <tr>

                  <th className="p-4 text-left">
                    ID
                  </th>

                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    Joined
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user) => (

                  <tr
                    key={user.id}
                    className="border-b hover:bg-gray-100"
                  >

                    <td className="p-4 font-semibold">
                      {user.id}
                    </td>

                    <td className="p-4">
                      {user.name}
                    </td>

                    <td className="p-4">
                      {user.email}
                    </td>

                    <td className="p-4">

                      {user.created_at
                        ? new Date(
                            user.created_at
                          ).toLocaleDateString()
                        : "-"}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}

export default Users;