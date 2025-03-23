import { useState, useEffect } from "react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { Heading } from "~/components/heading";

const mockUsers = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", status: "Ativo" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Usuário", status: "Inativo" },
  { id: 3, name: "Carol", email: "carol@example.com", role: "Editor", status: "Ativo" },
  { id: 4, name: "David", email: "david@example.com", role: "Admin", status: "Ativo" },
  { id: 5, name: "Eve", email: "eve@example.com", role: "Usuário", status: "Inativo" },
  { id: 6, name: "Frank", email: "frank@example.com", role: "Editor", status: "Ativo" },
  { id: 7, name: "Grace", email: "grace@example.com", role: "Admin", status: "Ativo" },
];

function ActionDropdown() {
  return (
    <button className="p-2 text-gray-600 hover:text-gray-900 hover:cursor-pointer">
      <DotsThreeVertical size={20} />
    </button>
  );
}

export function UserList() {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredUsers = mockUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [search]);

  return (
    <div className="w-full flex flex-col pb-4">
      <Heading>Listagem de Usuários</Heading>

      <input
        type="text"
        placeholder="Buscar usuário..."
        className="border border-gray-300 rounded-lg p-2 mb-4 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Nome</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Tipo</th>
              <th className="p-3 text-left">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id} className={`hover:bg-gray-100 ${users.length - 1 > index ? "border-b" : ""}`}>
                  <td className="p-3 text-gray-800">{user.name}</td>
                  <td className="p-3 text-gray-600">{user.email}</td>
                  <td className="p-3 text-gray-600">{user.role}</td>
                  <td className="p-3 font-medium text-gray-700">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${user.status === "Ativo" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <ActionDropdown />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">Nenhum usuário encontrado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
