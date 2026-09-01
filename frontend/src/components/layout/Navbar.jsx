import { Link } from "react-router-dom"
import Button from "../ui/Button"

function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          Touch<span className="text-green-500">Grass</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button>
              Register
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar