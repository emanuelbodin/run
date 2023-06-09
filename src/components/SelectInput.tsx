'use client'

export type SelectOptions = {
  id: string
  value: string | undefined
  label: string
  disabled?: boolean
}[]
interface SelectInputProps {
  label: string
  options: SelectOptions
  selectedValue?: string
  onChange: (value: string) => void
}
const SelectInput = ({ label, options, selectedValue, onChange }: SelectInputProps) => {
  return (
    <div className="mb-4 w-56">
      <label htmlFor={label} className="block mb-2 text-xs sm:text-sm">
        {label}
      </label>
      <select
        defaultValue={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        id={label}
        className="bg-gray-700 text-white text-sm rounded-lg w-full p-2.5">
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
