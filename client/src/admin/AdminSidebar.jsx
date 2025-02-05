import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Hamburger/Close Button */}
      <button
        className="fixed z-50 flex items-center justify-center w-12 h-12 text-white bg-gray-800 rounded-md top-4 right-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="text-2xl fas fa-times"></i>
        ) : (
          <i className="text-2xl fas fa-bars"></i>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-10 h-full bg-gray-900 text-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="p-6">
          {/* Welcome Admin Section with Animation */}
          <p className="mb-6 text-2xl font-bold text-white animate__animated animate__fadeInLeft animate__delay-1s">
            Welcome Admin
          </p>

          {/* Sidebar Links */}
          <ul className="flex flex-col items-start space-y-6 text-sm uppercase md:text-base lg:text-lg">
            {/* Home Page Settings with Submenu */}
            <li className="relative w-full group">
              <button
                onClick={() => setSubmenuOpen(!submenuOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-200 transition-all duration-500 ease-in-out hover:text-white focus:outline-none"
              >
                <span className="flex items-center justify-between w-full text-gray-200 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-blue-300">
                  <span>Home Page Settings</span>
                </span>
                <i
                  className={`fas fa-chevron-down transform transition-transform duration-300 ${
                    submenuOpen ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Submenu */}
              <ul
                className={`transition-all duration-300 ease-in-out ${
                  submenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li className="relative py-2 pl-6 group">
                  <Link
                    to="/admin-home"
                    className="relative block text-gray-300 transition-all duration-300 hover:text-blue-500"
                  >
                    <i className="mr-2 fas fa-image"></i> Admin Home
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                  </Link>
                </li>
                <li className="relative py-2 pl-6 group">
                  <Link
                    to="/home-banners"
                    className="relative block text-gray-300 transition-all duration-300 hover:text-blue-500"
                  >
                    <i className="mr-2 fas fa-flag"></i> Home Banners
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Sidebar Items */}
            {[
              {
                name: "T-Shirts",
                path: "/admin-tshirts",
                color: "from-green-500 to-green-300",
              },
              {
                name: "Shirts",
                path: "/admin-shirts",
                color: "from-green-900 to-green-700",
              },
              {
                name: "Hoodies",
                path: "/admin-hoodies",
                color: "from-yellow-300 to-yellow-100",
              },
              {
                name: "Sweaters",
                path: "/admin-sweaters",
                color: "from-red-500 to-red-300",
              },
              {
                name: "Jackets",
                path: "/admin-jackets",
                color: "from-purple-500 to-purple-300",
              },
              {
                name: "Blazers",
                path: "/admin-blazers",
                color: "from-yellow-900 to-yellow-800",
              },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className={`relative text-gray-200 transition-all duration-700 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r ${item.color}`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-[-1rem] w-[0.25rem] h-full bg-gradient-to-r ${item.color} transition-all duration-500 ease-in-out group-hover:left-[calc(100%+1rem)]`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
