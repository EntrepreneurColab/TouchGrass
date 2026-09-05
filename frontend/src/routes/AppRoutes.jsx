import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/public/Home"
import NotFound from "../pages/public/NotFound"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import MasterRegister from "../pages/auth/MasterRegister"

import AdminDashboard from "../pages/admin/Dashboard"
import UserDashboard from "../pages/user/Dashboard"

import ProtectedRoute from "./ProtectedRoute"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/staff/register" element={<MasterRegister />} />

        {/* Protected */}
        <Route element={<ProtectedRoute />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes