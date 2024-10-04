import githubLogo from "/github-mark-white.svg"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <a href="https://github.com/JeremyLoh/random-github-repo" target="_blank">
        <img
          src={githubLogo}
          className="logo"
          alt="GitHub logo links to project repository"
        />
      </a>
      <h1>GitHub Repository Finder</h1>
    </header>
  )
}

export default Header
