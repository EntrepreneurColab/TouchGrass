import { useState } from "react"

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState("dashboard")

  // Temporary data — later this comes from Jasim's API
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Developer",
      teamMember: true,
      status: "Working",
    },
    {
      id: 2,
      name: "Sarah Ali",
      role: "Designer",
      teamMember: true,
      status: "Working",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Developer",
      teamMember: false,
      status: "Available",
    },
    {
      id: 4,
      name: "Hamza Malik",
      role: "AI Engineer",
      teamMember: false,
      status: "Available",
    },
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "TouchGrass Website",
      description: "Build the TouchGrass company website.",
      employeeId: 1,
      progress: 70,
      status: "In Progress",
    },
    {
      id: 2,
      name: "AI Automation",
      description: "Build business automation workflow.",
      employeeId: 2,
      progress: 40,
      status: "In Progress",
    },
  ])

  const [projectName, setProjectName] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectEmployee, setProjectEmployee] = useState("")

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "⌂",
    },
    {
      id: "team",
      label: "Team",
      icon: "◉",
    },
    {
      id: "projects",
      label: "Projects",
      icon: "▣",
    },
    {
      id: "register",
      label: "Register",
      icon: "+",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "◌",
    },
  ]

  const navigateTo = (page) => {
    setActivePage(page)
    setMobileSidebarOpen(false)
  }

  const addToTeam = (employeeId) => {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === employeeId
          ? {
              ...employee,
              teamMember: true,
            }
          : employee
      )
    )
  }

  const removeFromTeam = (employeeId) => {
    setEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === employeeId
          ? {
              ...employee,
              teamMember: false,
            }
          : employee
      )
    )
  }

  const createProject = (e) => {
    e.preventDefault()

    if (!projectName || !projectEmployee) return

    const newProject = {
      id: Date.now(),
      name: projectName,
      description: projectDescription,
      employeeId: Number(projectEmployee),
      progress: 0,
      status: "Not Started",
    }

    setProjects((currentProjects) => [
      ...currentProjects,
      newProject,
    ])

    setProjectName("")
    setProjectDescription("")
    setProjectEmployee("")
  }

  const getEmployeeName = (employeeId) => {
    const employee = employees.find(
      (employee) => employee.id === employeeId
    )

    return employee ? employee.name : "Unassigned"
  }

  const teamMembers = employees.filter(
    (employee) => employee.teamMember
  )

  const activeProjects = projects.filter(
    (project) => project.status !== "Completed"
  )

  const renderDashboard = () => (
    <div>
      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Manage your team and projects from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Team Members
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {teamMembers.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Active Projects
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {activeProjects.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Working
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-green-400">
            {
              teamMembers.filter(
                (employee) => employee.status === "Working"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Total Employees
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {employees.length}
          </h2>
        </div>

      </div>

      {/* Recent Projects */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">
            Recent Projects
          </h2>

          <button
            onClick={() => navigateTo("projects")}
            className="text-sm text-green-400 hover:text-green-300"
          >
            View all
          </button>
        </div>

        <div className="mt-5 space-y-4">

          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h3 className="font-medium">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {getEmployeeName(project.employeeId)}
                  </p>
                </div>

                <span className="text-sm text-green-400">
                  {project.progress}%
                </span>

              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )

  const renderTeam = () => (
    <div>

      <h1 className="text-2xl font-semibold sm:text-3xl">
        Team
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Manage employees assigned to your team.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <h2 className="text-lg font-medium">
          Employees
        </h2>

        <div className="mt-5 space-y-3">

          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between"
            >

              <div>
                <h3 className="font-medium">
                  {employee.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {employee.role}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <span
                  className={`text-xs ${
                    employee.status === "Working"
                      ? "text-green-400"
                      : "text-gray-500"
                  }`}
                >
                  {employee.status}
                </span>

                {employee.teamMember ? (
                  <button
                    onClick={() =>
                      removeFromTeam(employee.id)
                    }
                    className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400 hover:bg-red-500/10"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => addToTeam(employee.id)}
                    className="rounded-lg bg-green-500 px-3 py-2 text-xs font-medium text-black hover:bg-green-400"
                  >
                    Add to Team
                  </button>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )

  const renderProjects = () => (
    <div>

      <h1 className="text-2xl font-semibold sm:text-3xl">
        Projects
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Create projects and assign them to your team members.
      </p>

      {/* Create Project */}
      <form
        onSubmit={createProject}
        className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
      >

        <h2 className="text-lg font-medium">
          Create Project
        </h2>

        <div className="mt-5 grid gap-4">

          <input
            type="text"
            value={projectName}
            onChange={(e) =>
              setProjectName(e.target.value)
            }
            placeholder="Project name"
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-green-500/40"
          />

          <textarea
            value={projectDescription}
            onChange={(e) =>
              setProjectDescription(e.target.value)
            }
            placeholder="Project description"
            rows="3"
            className="resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-green-500/40"
          />

          <select
            value={projectEmployee}
            onChange={(e) =>
              setProjectEmployee(e.target.value)
            }
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
          >
            <option value="" className="bg-neutral-900">
              Assign employee
            </option>

            {teamMembers.map((employee) => (
              <option
                key={employee.id}
                value={employee.id}
                className="bg-neutral-900"
              >
                {employee.name} — {employee.role}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={!projectName || !projectEmployee}
            className="w-fit rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Create Project
          </button>

        </div>

      </form>

      {/* Projects List */}
      <div className="mt-8 space-y-4">

        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <h2 className="font-medium">
                  {project.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {project.description}
                </p>

                <p className="mt-3 text-sm text-gray-400">
                  Assigned to:{" "}
                  <span className="text-white">
                    {getEmployeeName(project.employeeId)}
                  </span>
                </p>
              </div>

              <span className="text-sm text-green-400">
                {project.status}
              </span>

            </div>

            <div className="mt-5">

              <div className="mb-2 flex justify-between text-xs text-gray-500">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{
                    width: `${project.progress}%`,
                  }}
                />
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )

  const renderRegister = () => (
    <div>

      <h1 className="text-2xl font-semibold sm:text-3xl">
        Register
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Create accounts for authorized roles.
      </p>

      <div className="mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Role
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none">
              <option className="bg-neutral-900">
                Sub Master
              </option>

              <option className="bg-neutral-900">
                Employee
              </option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-gray-600"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-gray-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none placeholder:text-gray-600"
          />

          <button className="rounded-xl bg-green-500 px-5 py-3 text-sm font-medium text-black hover:bg-green-400">
            Create Account
          </button>

        </div>

      </div>

    </div>
  )

  const renderAnalytics = () => (
    <div>

      <h1 className="text-2xl font-semibold sm:text-3xl">
        Analytics
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Overview of team and project performance.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Total Employees
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {employees.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Working
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-green-400">
            {
              employees.filter(
                (employee) =>
                  employee.status === "Working"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <p className="text-sm text-gray-400">
            Total Projects
          </p>

          <h2 className="mt-2 text-3xl font-semibold">
            {projects.length}
          </h2>
        </div>

      </div>

    </div>
  )

  const renderContent = () => {
    switch (activePage) {
      case "team":
        return renderTeam()

      case "projects":
        return renderProjects()

      case "register":
        return renderRegister()

      case "analytics":
        return renderAnalytics()

      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen text-white">

      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <button
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40 h-screen
          border-r border-white/10
          bg-black/70 backdrop-blur-xl
          transition-all duration-300

          ${
            mobileSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0

          ${
            sidebarOpen
              ? "w-64"
              : "lg:w-20"
          }
        `}
      >

        {/* Logo */}
        <div className="flex h-20 items-center border-b border-white/10 px-5">

          {sidebarOpen ? (
            <span className="text-xl font-semibold">
              Touch<span className="text-green-500">
                Grass
              </span>
            </span>
          ) : (
            <span className="text-xl font-bold text-green-500">
              T
            </span>
          )}

        </div>

        {/* Navigation */}
        <nav className="space-y-2 p-4">

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`
                flex w-full items-center gap-3 rounded-xl
                px-4 py-3 text-sm transition
                ${
                  activePage === item.id
                    ? "bg-green-500/10 text-green-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >

              <span className="w-5 text-center">
                {item.icon}
              </span>

              {sidebarOpen && (
                <span>
                  {item.label}
                </span>
              )}

            </button>
          ))}

        </nav>

      </aside>

      {/* Main */}
      <main
        className={`
          min-h-screen transition-all duration-300
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}
        `}
      >

        {/* Topbar */}
        <header className="flex h-20 items-center border-b border-white/10 bg-black/20 px-4 backdrop-blur-md sm:px-6">

          {/* Desktop sidebar toggle */}
          <button
            onClick={() =>
              setSidebarOpen(!sidebarOpen)
            }
            className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 hover:bg-white/10 lg:block"
          >
            {sidebarOpen ? "←" : "→"}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() =>
              setMobileSidebarOpen(true)
            }
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 hover:bg-white/10 lg:hidden"
          >
            ☰
          </button>

          <div className="ml-auto text-sm text-gray-400">
            Admin
          </div>

        </header>

        {/* Page Content */}
        <section className="p-4 sm:p-6 lg:p-8">
          {renderContent()}
        </section>

      </main>

    </div>
  )
}

export default Dashboard