import { useEffect, useState } from "react"
import {
  Mail,
  Building2,
  Phone,
  MessageSquare,
  RefreshCw,
  Loader2,
} from "lucide-react"

import GlassCard from "../../components/ui/GlassCard"
import Button from "../../components/ui/Button"
import contactService from "../../services/contactService"

function Dashboard() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const getContacts = async () => {
    try {
      setLoading(true)
      setError("")

      const data = await contactService.getContacts()

      if (data.success) {
        setContacts(data.contacts)
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Failed to load contact requests"
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <main className="min-h-screen px-4 py-6 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="text-sm text-green-400">
              MASTER DASHBOARD
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Business Requests
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Manage incoming business and automation requests.
            </p>
          </div>

          <Button
            onClick={getContacts}
            disabled={loading}
          >
            {loading ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <RefreshCw size={18} />
            )}

            Refresh
          </Button>

        </div>

        {/* Stats */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <GlassCard className="p-5">
            <p className="text-sm text-gray-400">
              Total Requests
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {contacts.length}
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <p className="text-sm text-gray-400">
              New
            </p>

            <p className="mt-2 text-3xl font-semibold text-green-400">
              {
                contacts.filter(
                  (contact) =>
                    contact.status === "new"
                ).length
              }
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <p className="text-sm text-gray-400">
              In Progress
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {
                contacts.filter(
                  (contact) =>
                    contact.status === "in-progress"
                ).length
              }
            </p>
          </GlassCard>

          <GlassCard className="p-5">
            <p className="text-sm text-gray-400">
              Completed
            </p>

            <p className="mt-2 text-3xl font-semibold">
              {
                contacts.filter(
                  (contact) =>
                    contact.status === "completed"
                ).length
              }
            </p>
          </GlassCard>

        </div>

        {/* Error */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Loading */}

        {loading && contacts.length === 0 && (
          <div className="flex justify-center py-20">
            <Loader2
              size={32}
              className="animate-spin text-green-400"
            />
          </div>
        )}

        {/* Empty State */}

        {!loading && contacts.length === 0 && (
          <GlassCard className="p-10 text-center">

            <MessageSquare
              size={40}
              className="mx-auto text-gray-500"
            />

            <h2 className="mt-4 text-xl font-medium">
              No requests yet
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              New business requests will appear here.
            </p>

          </GlassCard>
        )}

        {/* Contact Cards */}

        <div className="grid gap-5 lg:grid-cols-2">

          {contacts.map((contact) => (

            <GlassCard
              key={contact._id}
              className="p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-lg font-semibold">
                    {contact.name}
                  </h2>

                  {contact.company && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                      <Building2 size={15} />

                      {contact.company}
                    </div>
                  )}
                </div>

                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  {contact.status}
                </span>

              </div>

              <div className="mt-5 space-y-3 text-sm text-gray-400">

                <div className="flex items-center gap-3">
                  <Mail size={16} />

                  {contact.email}
                </div>

                {contact.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={16} />

                    {contact.phone}
                  </div>
                )}

              </div>

              <div className="mt-5 border-t border-white/10 pt-5">

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  Business Problem
                </p>

                <p className="text-sm leading-7 text-gray-300">
                  {contact.message}
                </p>

              </div>

              <p className="mt-5 text-xs text-gray-500">
                Received{" "}

                {new Date(
                  contact.createdAt
                ).toLocaleString()}
              </p>

            </GlassCard>

          ))}

        </div>

      </div>

    </main>
  )
}

export default Dashboard