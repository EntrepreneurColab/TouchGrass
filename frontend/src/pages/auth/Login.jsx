import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Button from "../../components/ui/Button"
import authService from "../../services/authService"
import Dropdown from "../../components/ui/Dropdown"

function Login() {
  const navigate = useNavigate()

  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginRoles = [
    {
      value: "user",
      label: "User",
    },
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "sub-master",
      label: "Sub Master",
    },
    {
      value: "master",
      label: "Master",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await authService.login({
        email,
        password,
        role,
      })

      console.log("Login successful:", data)

      if (data.success) {
        if (data.user.role === "user") {
          navigate("/user/dashboard")
        } else if (data.user.role === "admin") {
          navigate("/admin/dashboard")
        } else if (data.user.role === "sub-master") {
          navigate("/submaster")
        } else if (data.user.role === "master") {
          navigate("/master")
        } else if (data.user.role === "staff") {
          navigate("/staff")
        }
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data || error.message
      )
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black/20 px-4 py-10 text-white sm:px-6">

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-2xl font-semibold"
          >
            Touch<span className="text-green-500">Grass</span>
          </Link>

          <h1 className="mt-6 text-3xl font-semibold">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Sign in to your TouchGrass account
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >

          {/* Role */}
          <div className="space-y-2">
            <Dropdown
              label="Login as"
              name="role"
              value={role}
              onChange={setRole}
              options={loginRoles}
              placeholder="Select role"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>

          {/* Register */}
          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-400 hover:text-green-300"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </main>
  )
}

export default Login