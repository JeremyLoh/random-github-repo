import { GoSync } from "react-icons/go"
import "./RefreshRepository.css"

function RefreshRepository({ handleClick }: { handleClick: () => void }) {
  return (
    <button className="refresh-repository-btn" onClick={handleClick}>
      <GoSync /> Refresh
    </button>
  )
}

export default RefreshRepository
