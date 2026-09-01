function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"

  const variants = {
    primary:
      "bg-green-500 text-black hover:bg-green-400",

    secondary:
      "border border-white/10 bg-white/5 text-white hover:bg-white/10",

    ghost:
      "text-gray-300 hover:bg-white/5 hover:text-white",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button