"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  User,
  LogOut,
  Menu
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Tasks",
      href: "/tasks",
      icon: CheckSquare,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-green-400 p-2 rounded shadow"
        onClick={() => setOpen(!open)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-white flex flex-col border-r shadow-sm
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold text-green-600">
            Task Manager
          </h1>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex flex-col justify-between flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition
                      ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 mt-4 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
}