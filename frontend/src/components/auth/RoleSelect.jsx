function RoleSelect({ value, onChange, roles = [] }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="role"
        className="text-sm font-medium text-gray-300"
      >
        Login as
      </label>

      <select
        id="role"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
      >
        <option value="" className="bg-neutral-900">
          Select role
        </option>

        {roles.map((role) => (
          <option
            key={role.value}
            value={role.value}
            className="bg-neutral-900"
          >
            {role.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default RoleSelect