import "./App.css"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"

function App() {
  const options = [{ id: 1, value: "AppleScript", title: "AppleScript" }]
  return (
    <>
      <Header />
      <Dropdown options={options} />
    </>
  )
}

export default App
