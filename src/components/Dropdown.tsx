import { useRef, useState } from "react"
import "./Dropdown.css"
import Language from "../model/Language"
import useOutsideClick from "../hooks/useOutsideClick"

function Dropdown({ options }: { options: Language[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  function handleSelectOption(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setSelectedOption((event.target as HTMLButtonElement).innerText)
    setIsOpen(false)
  }
  function handleOutsideClick() {
    if (isOpen) {
      setIsOpen(false)
    }
  }
  useOutsideClick(dropdownRef, handleOutsideClick)

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? "-" : "+"}</span>
        <b>{selectedOption ? selectedOption : "Select a Language"}</b>
      </button>
      <div className={`options ${isOpen ? "show" : "hide"}`}>
        {options.map((option: Language) => {
          return (
            <button
              key={option.id}
              value={option.value}
              className={`option ${
                selectedOption === option.value ? "selected-option" : ""
              }`}
              onClick={handleSelectOption}
            >
              {option.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown
