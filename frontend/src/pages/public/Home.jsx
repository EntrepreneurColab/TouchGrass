import Navbar from "../../components/layout/Navbar"
import GlassCard from "../../components/ui/GlassCard"

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center px-6">
        <GlassCard className="p-10">
          <h1 className="text-4xl font-bold">
            Touch<span className="text-green-500">Grass</span>
          </h1>

          <p className="mt-3 text-gray-400">
            Technology that solves real business problems.
          </p>
        </GlassCard>
      </main>
    </div>
  )
}

export default Home