import { useState } from "react"
import { Link } from "react-router-dom"
import { CheckCircle2, Loader2, Send } from "lucide-react"

import Button from "../../components/ui/Button"
import GlassCard from "../../components/ui/GlassCard"
import contactService from "../../services/contactService"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSuccess("")
    setError("")

    try {
      const data = await contactService.createContact(formData)

      if (data.success) {
        setSuccess(data.message)

        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        })
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to send your request. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">

      {/* Navbar */}

      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between py-4">
        <Link
          to="/"
          className="text-2xl font-semibold"
        >
          Touch<span className="text-green-500">Grass</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-green-400"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Content */}

      <section className="mx-auto flex max-w-7xl items-center justify-center py-12 lg:min-h-[80vh]">

        <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>
            <p className="text-sm font-medium text-green-400">
              LET'S BUILD SOMETHING BETTER
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Tell us the problem.
              <br />

              <span className="text-green-500">
                We'll find the solution.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Whether you need AI automation, workflow automation,
              a custom website, or a technology solution for your
              business, tell us what you're trying to solve.
            </p>

            <div className="mt-8 space-y-4 text-sm text-gray-400">

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                AI & Automation Solutions
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                Business Problem Solving
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                Custom Web Development
              </div>

            </div>
          </div>

          {/* Form */}

          <GlassCard className="p-6 sm:p-8">

            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Start a conversation
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Tell us about your business and what you need help with.
              </p>
            </div>

            {success && (
              <div className="mb-5 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
                {success}
              </div>
            )}

            {error && (
              <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-500/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-500/50"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  What problem are you trying to solve?
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your business problem..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Request
                  </>
                )}
              </Button>

            </form>

          </GlassCard>

        </div>

      </section>

    </main>
  )
}

export default Contact