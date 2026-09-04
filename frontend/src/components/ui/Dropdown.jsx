import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

function Dropdown({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  const selectedOption = options.find(
    (option) => option.value === value
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option) => {
    onChange(option.value)
    setOpen(false)
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <div
        ref={dropdownRef}
        className="relative w-full"
      >
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            flex w-full items-center justify-between
            rounded-xl
            border border-white/10
            bg-white/5
            px-4 py-3
            text-left
            text-sm
            text-white
            outline-none
            backdrop-blur-xl
            transition-all duration-200
            hover:border-white/20
            hover:bg-white/10
            focus:border-green-500/50
            focus:ring-1
            focus:ring-green-500/30
          "
        >
          <span
            className={
              selectedOption
                ? "text-white"
                : "text-gray-500"
            }
          >
            {selectedOption
              ? selectedOption.label
              : placeholder}
          </span>

          <ChevronDown
            size={18}
            className={`shrink-0 text-gray-400 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="
              absolute
              left-0
              right-0
              top-full
              z-50
              mt-2
              w-full
              overflow-hidden
              rounded-xl
              border border-white/10
              bg-neutral-950/95
              p-1
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {options.map((option) => {
              const isSelected = option.value === value

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full
                    rounded-lg
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition
                    ${
                      isSelected
                        ? "bg-green-500/15 text-green-400"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown