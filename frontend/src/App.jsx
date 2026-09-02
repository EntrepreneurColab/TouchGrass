import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div className="relative min-h-screen text-white">

      {/* Desktop Background */}
      <div
        className="fixed inset-0 z-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage:
            "url('/backgrounds/touchgrass-desktop.png')",
        }}
      />

      {/* Mobile Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{
          backgroundImage:
            "url('/backgrounds/touchgrass-mobile.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 z-0 bg-black/40" />

      {/* Website Content */}
      <div className="relative z-10 min-h-screen">
        <AppRoutes />
      </div>

    </div>
  )
}

export default App