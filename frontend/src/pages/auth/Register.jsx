import { useState } from "react"
import { Link } from "react-router-dom"

import Button from "../../components/ui/Button"
import authService from "../../services/authService"

function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const data = await authService.register({
      name,
      email,
      password,
    })

    console.log("Registration successful:", data)
  } catch (error) {
    console.error("Registration failed:", error)
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
            Create account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Start your TouchGrass journey
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
        >

          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-300"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50"
            />
          </div>

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
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50"
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
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-green-500/50"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!name || !email || !password}
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:text-green-300"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </main>
  )
}

export default Register