import { Response, useFetchLanguages } from "./api/language"
import "./App.css"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"

function App() {
  const { languages, isLoading, error }: Response = useFetchLanguages()
  return (
    <>
      <Header />
      {error ? <div>Something went wrong. Please try again later</div> : null}
      {isLoading ? <div>LOADING...</div> : <Dropdown options={languages} />}
    </>
  )
}

export default App
