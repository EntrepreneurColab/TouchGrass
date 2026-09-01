import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/public/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import MasterRegister from "../pages/auth/MasterRegister"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route
          path="/master/register"
          element={<MasterRegister />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes