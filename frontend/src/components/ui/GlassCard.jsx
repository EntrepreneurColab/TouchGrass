function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border border-white/[0.10]
        bg-white/[0.015]
        backdrop-blur-sm
        backdrop-saturate-150
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard