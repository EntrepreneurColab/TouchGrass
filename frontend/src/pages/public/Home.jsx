import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ArrowRight,
  Bot,
  Code2,
  Menu,
  Workflow,
  X,
} from "lucide-react"

import Button from "../../components/ui/Button"
import GlassCard from "../../components/ui/GlassCard"
import authService from "../../services/authService"

function Home() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  const handleContactClick = () => {
    if (!authService.isAuthenticated()) {
      navigate("/login")
      return
    }

    scrollToSection("contact")
  }

  return (
    <main className="min-h-screen overflow-x-hidden text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">

            {/* Logo */}

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-xl font-semibold tracking-tight"
            >
              Touch<span className="text-green-500">Grass</span>
            </Link>


            {/* Desktop Navigation */}

            <div className="hidden items-center gap-6 md:flex">

              <button
                onClick={() => scrollToSection("solutions")}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Solutions
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                About
              </button>

              <button
                onClick={handleContactClick}
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Contact
              </button>

              <Link
                to="/login"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-sm text-gray-300 transition hover:text-white"
              >
                Register
              </Link>

              <Button onClick={() => navigate("/register")}>
                Get Started
              </Button>

            </div>


            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-gray-300 transition hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>


          {/* Mobile Navigation */}

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl md:hidden">

              <div className="flex flex-col gap-1">

                <button
                  onClick={() => scrollToSection("solutions")}
                  className="rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  Solutions
                </button>

                <button
                  onClick={() => scrollToSection("about")}
                  className="rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  About
                </button>

                <button
                  onClick={handleContactClick}
                  className="rounded-xl px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  Contact
                </button>

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  Register
                </Link>

                <Button
                  onClick={() => {
                    setMenuOpen(false)
                    navigate("/register")
                  }}
                  className="mt-2 w-full"
                >
                  Get Started
                </Button>

              </div>

            </div>
          )}

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section
        id="hero"
        className="flex min-h-screen items-center px-4 pb-20 pt-36 sm:px-6 lg:pb-32"
      >
        <div className="mx-auto w-full max-w-7xl">

          <div className="max-w-5xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/[0.05] px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-green-400">
                AI • Automation • Technology
              </span>
            </div>


            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Turn business
              <span className="block text-green-500">
                problems into
              </span>
              automated solutions.
            </h1>


            <p className="mt-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              We identify repetitive work, inefficient processes,
              and business bottlenecks — then build intelligent
              systems that solve them.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Button onClick={() => navigate("/register")}>
                Get Started
                <ArrowRight size={18} />
              </Button>

              <button
                onClick={() => scrollToSection("solutions")}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-gray-300 backdrop-blur-sm transition hover:bg-white/[0.05] hover:text-white"
              >
                Explore Solutions
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* ================= OBJECTIVE ================= */}

      <section
        id="about"
        className="px-4 py-24 sm:px-6 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
                Our Objective
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                Technology should solve problems,
                not create more of them.
              </h2>

            </div>


            <div className="max-w-xl text-gray-300">

              <p className="leading-8">
                Every business has processes that consume time,
                require repetitive manual work, or simply don't
                work as efficiently as they should.
              </p>

              <p className="mt-5 leading-8">
                TouchGrass focuses on understanding those problems
                first. We then use AI, automation, integrations,
                and software engineering to build practical
                solutions around them.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SOLUTIONS ================= */}

      <section
        id="solutions"
        className="px-4 py-24 sm:px-6 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Solutions built around
              <span className="text-gray-400">
                {" "}real problems.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              We don't start with a technology and search for
              somewhere to use it. We start with the problem.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {/* AI */}

            <GlassCard className="group p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">

              <Bot
                size={30}
                className="text-green-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-7 text-2xl font-semibold">
                AI Automation
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-gray-400">
                Automate repetitive knowledge work, process
                information, assist teams, and introduce AI
                where it actually creates business value.
              </p>

            </GlassCard>


            {/* Workflow */}

            <GlassCard className="group p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">

              <Workflow
                size={30}
                className="text-green-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-7 text-2xl font-semibold">
                Workflow Automation
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-gray-400">
                Connect tools, remove repetitive tasks, and
                create automated workflows using platforms
                such as n8n and custom integrations.
              </p>

            </GlassCard>


            {/* Software */}

            <GlassCard className="group p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">

              <Code2
                size={30}
                className="text-green-400 transition duration-300 group-hover:scale-110"
              />

              <h3 className="mt-7 text-2xl font-semibold">
                Custom Web Solutions
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-gray-400">
                Build websites and applications designed around
                specific business workflows, requirements,
                and long-term goals.
              </p>

            </GlassCard>


            {/* Problem Solving */}

            <GlassCard className="group p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">

              <ArrowRight
                size={30}
                className="text-green-400 transition duration-300 group-hover:translate-x-1"
              />

              <h3 className="mt-7 text-2xl font-semibold">
                Business Problem Solving
              </h3>

              <p className="mt-3 max-w-lg leading-7 text-gray-400">
                We analyze the way your business works and
                determine where technology can remove friction,
                reduce manual effort, and improve operations.
              </p>

            </GlassCard>

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}

      <section className="px-4 py-24 sm:px-6 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              From problem
              <span className="text-gray-400">
                {" "}to solution.
              </span>
            </h2>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We understand the business, workflow, and problem before deciding on a solution.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "We design a practical system around the actual requirements and workflow.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "We develop, integrate, and automate the solution.",
              },
              {
                number: "04",
                title: "Improve",
                description:
                  "We monitor the system and continuously improve its performance.",
              },
            ].map((step) => (

              <GlassCard
                key={step.number}
                className="group p-6 transition duration-300 hover:-translate-y-1"
              >

                <span className="text-sm font-medium text-green-400">
                  {step.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {step.description}
                </p>

              </GlassCard>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="px-4 py-24 sm:px-6 lg:py-32"
      >

        <div className="mx-auto max-w-6xl">

          <GlassCard className="p-6 sm:p-10 lg:p-14">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
                  Contact Us
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                  Have a problem
                  <span className="block text-gray-400">
                    worth solving?
                  </span>
                </h2>

                <p className="mt-6 max-w-lg leading-7 text-gray-400">
                  Tell us what you're trying to improve.
                  Whether it's repetitive work, inefficient
                  processes, or a completely new idea —
                  let's talk about it.
                </p>

                <button
                  onClick={() => navigate("/login")}
                  className="mt-6 text-sm text-green-400 transition hover:text-green-300"
                >
                  Sign in to continue →
                </button>

              </div>


              <ContactForm
                onRequireLogin={() => navigate("/login")}
              />

            </div>

          </GlassCard>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <Link
              to="/"
              className="text-lg font-semibold tracking-tight"
            >
              Touch<span className="text-green-500">Grass</span>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              AI • Automation • Technology
            </p>

          </div>


          <div className="flex flex-wrap gap-5 text-sm text-gray-500">

            <button
              onClick={() => scrollToSection("solutions")}
              className="transition hover:text-white"
            >
              Solutions
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={handleContactClick}
              className="transition hover:text-white"
            >
              Contact
            </button>

          </div>


          <p className="text-sm text-gray-500">
            © 2026 TouchGrass. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  )
}


/* ================= CONTACT FORM ================= */

function ContactForm({ onRequireLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!authService.isAuthenticated()) {
      onRequireLogin()
      return
    }

    setLoading(true)

    try {

      /*
        Contact API will be connected here.

        Example:

        const data = await contactService.submitContact(form)

        After Jasim gives us the endpoint,
        we'll replace this section.
      */

      console.log("Contact request:", form)

      setForm({
        name: "",
        email: "",
        message: "",
      })

    } catch (error) {

      console.error(
        "Contact submission failed:",
        error.response?.data || error.message
      )

    } finally {
      setLoading(false)
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <div>

        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm text-gray-300"
        >
          Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition placeholder:text-gray-600 focus:border-green-500/40 focus:bg-white/[0.04]"
        />

      </div>


      <div>

        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm text-gray-300"
        >
          Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition placeholder:text-gray-600 focus:border-green-500/40 focus:bg-white/[0.04]"
        />

      </div>


      <div>

        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm text-gray-300"
        >
          How can we help?
        </label>

        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about the problem you're trying to solve..."
          rows={6}
          required
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition placeholder:text-gray-600 focus:border-green-500/40 focus:bg-white/[0.04]"
        />

      </div>


      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Sending..." : "Send Message"}
        {!loading && <ArrowRight size={18} />}
      </Button>


      <p className="text-center text-xs leading-5 text-gray-600">
        You must be signed in before submitting a contact request.
      </p>

    </form>
  )
}

export default Home