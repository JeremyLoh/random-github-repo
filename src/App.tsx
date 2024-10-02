import "./App.css"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"

function App() {
  // TODO get list of languages from API
  const options = [
    { id: 1, value: "AppleScript", title: "AppleScript" },
    { id: 2, value: "Assembly", title: "Assembly" },
  ]
  return (
    <>
      <Header />
      <Dropdown options={options} />
    </>
  )
}

export default App
