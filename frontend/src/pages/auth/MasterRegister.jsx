import { useState } from "react"
import { Link } from "react-router-dom"

import RoleSelect from "../../components/auth/RoleSelect"
import Button from "../../components/ui/Button"
import { ROLES } from "../../utils/constants"
import authService from "../../services/authService"

const MASTER_REGISTER_ROLES = [
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
  }
]

function MasterRegister() {
  const [role, setRole] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const data = await authService.registerStaff({
      name,
      email,
      password,
      role,
    })

    console.log("Staff account created:", data)
  } catch (error) {
    console.error("Staff registration failed:", error)
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white sm:px-6">

      <div className="w-full max-w-md">

        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-2xl font-semibold"
          >
            Touch<span className="text-green-500">Grass</span>
          </Link>

          <h1 className="mt-6 text-3xl font-semibold">
            Create Staff Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Master administration
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >

          <RoleSelect
            value={role}
            onChange={setRole}
            roles={MASTER_REGISTER_ROLES}
          />

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm text-gray-300"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm text-gray-300"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm text-gray-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-green-500/50"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!role || !name || !email || !password}
          >
            Create Staff Account
          </Button>

        </form>
      </div>
    </main>
  )
}

export default MasterRegister