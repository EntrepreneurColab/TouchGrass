import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Home } from "lucide-react"

import Button from "../../components/ui/Button"
import GlassCard from "../../components/ui/GlassCard"

function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-20 text-white sm:px-6">

      <GlassCard className="w-full max-w-xl p-8 text-center sm:p-12">

        {/* Error Code */}

        <p className="text-7xl font-semibold tracking-tight text-green-500 sm:text-8xl">
          404
        </p>


        {/* Heading */}

        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
          Page not found
        </h1>


        {/* Description */}

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          Looks like you've wandered somewhere that doesn't exist.
          Let's get you back to where you belong.
        </p>


        {/* Actions */}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Button onClick={() => navigate("/")}>
            <Home size={18} />
            Back to Home
          </Button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-gray-300 backdrop-blur-sm transition hover:bg-white/[0.05] hover:text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </Link>

        </div>


        {/* Branding */}

        <div className="mt-10 border-t border-white/10 pt-6">

          <Link
            to="/"
            className="text-sm font-semibold tracking-tight"
          >
            Touch<span className="text-green-500">Grass</span>
          </Link>

          <p className="mt-1 text-xs text-gray-600">
            AI • Automation • Technology
          </p>

        </div>

      </GlassCard>

    </main>
  )
}

export default NotFound