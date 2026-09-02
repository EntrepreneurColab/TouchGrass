import { useState } from "react"
import { Link } from "react-router-dom"


import Button from "../../components/ui/Button"
import authService from "../../services/authService"
function RoleSelect({ value, onChange, roles = [] }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="role"
        className="text-sm font-medium text-gray-300 "
      >
        Login as
      </label>

      <select
        id="role"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
      >
        <option value="" className="bg-neutral-900">
          Select role
        </option>

        {roles.map((role) => (
          <option
            key={role.value}
            value={role.value}
            className="bg-neutral-900"
          >
            {role.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export const ROLES = {
  USER: "user",
  ADMIN: "admin",
  SUBMASTER: "submaster",
  MASTER: "master",
}
export const LOGIN_ROLES = [
  {
    value: ROLES.USER,
    label: "User",
  },
  {
    value: ROLES.ADMIN,
    label: "Admin",
  },
  {
    value: ROLES.SUBMASTER,
    label: "Sub Master",
  },
  {
    value: ROLES.MASTER,
    label: "Master",
  },
]

function Login() {
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = await authService.login({
        email,
        password,
        role,
      })

      console.log("Login successful:", data)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black/20 px-4 py-10 text-white sm:px-6">

      <div className="w-full max-w-md">

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

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >

          <RoleSelect
            value={role}
            onChange={setRole}
            roles={LOGIN_ROLES}
          />

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!role || !email || !password}
          >
            Login
          </Button>

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