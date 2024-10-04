import "./RepositoryCard.css"
import {
  GoLinkExternal,
  GoDotFill,
  GoStar,
  GoRepoForked,
  GoInfo,
} from "react-icons/go"
import Repository from "../model/Repository"

function RepositoryCard({
  repository,
  selectedLanguage,
}: {
  repository: Repository | null
  selectedLanguage: string | null
}) {
  // use bitwise or (|) with zero to get int
  const iconStyles = {
    color: COLORS[(COLORS.length * Math.random()) | 0],
    fontSize: "1.5em",
  }
  return (
    <div className="card">
      {selectedLanguage == null ? (
        <p>Please select a language</p>
      ) : repository == null ? (
        <p>Loading, Please wait...</p>
      ) : (
        <>
          <a className="stat" href={`${repository.html_url}`} target="_blank">
            <GoLinkExternal />
          </a>
          <h3 className="title">{repository.name}</h3>
          <p className="description">{repository.description}</p>
          <div className="info">
            <p className="stat" title="Programming Language">
              <GoDotFill style={iconStyles} /> {repository.language}
            </p>
            <p className="stat" title="Stars">
              <GoStar /> {repository.stargazers_count}
            </p>
            <p className="stat" title="Forks">
              <GoRepoForked /> {repository.forks_count}
            </p>
            <p className="stat" title="Open Issues">
              <GoInfo />{" "}
              <a href={`${repository.html_url}/issues`} target="_blank">
                {repository.open_issues_count}
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  )
}

// https://tailwindcss.com/docs/customizing-colors
const COLORS = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
]

export default RepositoryCard
