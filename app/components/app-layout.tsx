import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import { Users, GridFour } from "@phosphor-icons/react";

const links = [
  { name: "Dashboard", path: "/", icon: <GridFour size={20} /> },
  { name: "Usuários", path: "/users", icon: <Users size={20} /> },
];

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen relative">
      <aside
        className={`absolute h-full bg-blue-900 text-white transition-all duration-300 z-50 flex flex-col ${isExpanded ? "w-52" : "w-16"
          }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4 font-bold text-lg">
          {isExpanded ? "AdminManagement" : "AM"}
        </div>
        <nav className="mt-4 flex flex-col gap-2">
          {links.map(({ name, path, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 transition-colors ${isActive ? "bg-blue-700" : "hover:bg-blue-800"
                }`
              }
            >
              {icon}
              {isExpanded && <span>{name}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 ml-16 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar;
