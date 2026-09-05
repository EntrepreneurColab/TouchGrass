import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Activity,
  BarChart3,
  ChevronRight,
  FolderKanban,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  X,
} from "lucide-react"

import GlassCard from "../../components/ui/GlassCard"
import Button from "../../components/ui/Button"
import authService from "../../services/authService"

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const user = authService.getCurrentUser()

  const projects = [
    {
      id: 1,
      name: "Customer Support Automation",
      description: "Automating customer support workflows with AI.",
      status: "In Development",
      progress: 75,
      team: "TouchGrass Automation Team",
      updated: "2 hours ago",
    },
    {
      id: 2,
      name: "Business Website",
      description: "Modern responsive website for your business.",
      status: "Testing",
      progress: 90,
      team: "TouchGrass Web Team",
      updated: "Yesterday",
    },
  ]

  const activities = [
    {
      title: "Project moved to Testing",
      project: "Business Website",
      time: "Yesterday",
    },
    {
      title: "Automation workflow updated",
      project: "Customer Support Automation",
      time: "2 hours ago",
    },
    {
      title: "Requirements approved",
      project: "Customer Support Automation",
      time: "2 days ago",
    },
  ]

  const handleLogout = () => {
    authService.logout()
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen text-white">
      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/30 px-4 py-4 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            Touch<span className="text-green-500">Grass</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          border-r border-white/10 bg-black/50 p-5
          backdrop-blur-2xl transition-transform duration-300
          lg:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold">
            Touch<span className="text-green-500">Grass</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-400 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400">
              <User size={20} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {user?.name || "User"}
              </p>
              <p className="truncate text-xs text-gray-500">
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>
        </div>

        <nav className="mt-8 space-y-2">
          <Link
            to="/user/dashboard"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl bg-green-500/10 px-4 py-3 text-sm font-medium text-green-400"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <Link
            to="/user/projects"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <FolderKanban size={18} />
            My Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <MessageSquare size={18} />
            New Request
          </Link>

          <Link
            to="/user/activity"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <Activity size={18} />
            Activity
          </Link>

          <Link
            to="/user/settings"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            <Settings size={18} />
            Settings
          </Link>
        </nav>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen px-4 pb-12 pt-24 sm:px-6 lg:ml-72 lg:px-10 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-green-400">Client Portal</p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Welcome back, {user?.name || "there"}
            </h1>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Here’s an overview of your projects and requests.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Active Projects</p>
                <FolderKanban size={20} className="text-green-400" />
              </div>

              <p className="mt-4 text-3xl font-semibold">2</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Completed</p>
                <BarChart3 size={20} className="text-green-400" />
              </div>

              <p className="mt-4 text-3xl font-semibold">4</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Open Requests</p>
                <MessageSquare size={20} className="text-green-400" />
              </div>

              <p className="mt-4 text-3xl font-semibold">1</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">Recent Updates</p>
                <Activity size={20} className="text-green-400" />
              </div>

              <p className="mt-4 text-3xl font-semibold">3</p>
            </GlassCard>
          </div>

          {/* Projects + Activity */}
          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
            {/* Projects */}
            <GlassCard className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">Active Projects</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Track the progress of your projects.
                  </p>
                </div>

                <Link
                  to="/user/projects"
                  className="hidden items-center gap-1 text-sm text-green-400 hover:text-green-300 sm:flex"
                >
                  View all
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-medium">{project.name}</h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {project.description}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-gray-300">
                          {project.progress}%
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                      <span>Team: {project.team}</span>
                      <span>Updated {project.updated}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/user/projects"
                className="mt-5 flex items-center justify-center gap-1 text-sm text-green-400 hover:text-green-300 sm:hidden"
              >
                View all projects
                <ChevronRight size={16} />
              </Link>
            </GlassCard>

            {/* Activity */}
            <GlassCard className="p-5 sm:p-6">
              <div>
                <h2 className="text-lg font-semibold">Recent Activity</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Latest updates from your projects.
                </p>
              </div>

              <div className="mt-6 space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                      <Activity size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>

                      <p className="mt-1 text-xs text-gray-500">
                        {activity.project}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* CTA */}
          <GlassCard className="mt-6 overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-medium text-green-400">
                  Need another solution?
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Have another business problem?
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
                  Tell us what you're trying to solve and our team will help
                  turn it into a practical technology solution.
                </p>
              </div>

              <Link to="/contact" className="shrink-0">
                <Button>
                  Start a New Request
                  <ChevronRight size={18} />
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}

export default Dashboard