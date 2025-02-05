import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./admin/AdminSidebar"; // Sidebar component
import AdminHome from "./admin/AdminHome";
import AdminTShirts from "./admin/AdminTShirts";
import AdminShirts from "./admin/AdminShirts";
import AdminHoodies from "./admin/AdminHoodies";
import AdminSweaters from "./admin/AdminSweaters";
import AdminJackets from "./admin/AdminJackets";
import AdminBlazers from "./admin/AdminBlazers";

function RoutingAdmin() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 transition-all duration-300 md:ml-64">
        <Routes>
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-tshirts" element={<AdminTShirts />} />
          <Route path="/admin-shirts" element={<AdminShirts />} />
          <Route path="/admin-hoodies" element={<AdminHoodies />} />
          <Route path="/admin-sweaters" element={<AdminSweaters />} />
          <Route path="/admin-jackets" element={<AdminJackets />} />
          <Route path="/admin-blazers" element={<AdminBlazers />} />
        </Routes>
      </div>
    </div>
  );
}

export default RoutingAdmin;
