import { useAllUserQuery } from "@/redux/features/auth/auth.api";
import { useState } from "react";

export default function UserManagement() {
  const { data, isLoading, isError } = useAllUserQuery(undefined);
  const [search, setSearch] = useState("");

  if (isLoading) {
    return <div className="p-6 text-center">Loading users...</div>;
  }

  if (isError) {
    return <div className="p-6 text-center text-red-500">Failed to load users.</div>;
  }

  const users = data?.data || [];

  // simple search filter
  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded-lg"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Role</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Approved</th>
              <th className="border border-gray-300 p-2">Online</th>
              <th className="border border-gray-300 p-2">Created At</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: any, index: number) => (
                <tr key={user._id} className="text-center">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{user.name}</td>
                  <td className="border border-gray-300 p-2">{user.email}</td>
                  <td className="border border-gray-300 p-2">{user.role}</td>
                  <td
                    className={`border border-gray-300 p-2 font-semibold ${
                      user.isActive === "ACTIVE" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {user.isActive}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {user.isApproved ? "✅" : "❌"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {user.isOnline ? "🟢" : "⚪"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 p-2 space-x-2">
                    <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="border border-gray-300 p-4 text-center text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
