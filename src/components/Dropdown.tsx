import { useRef, useState } from "react"
import "./Dropdown.css"
import Language from "../model/Language"
import useOutsideClick from "../hooks/useOutsideClick"

function Dropdown({ options }: { options: Language[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  function handleOutsideClick() {
    // TODO handle click outside of dropdown
    console.log("CLICK OUTSIDE DROPDOWN")
  }
  useOutsideClick(dropdownRef, handleOutsideClick)

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
        Select a Language
      </button>
      <div className={`options ${isOpen ? "show" : "hide"}`}>
        {options.map((option: Language) => {
          return (
            <button key={option.id} value={option.value}>
              {option.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown
