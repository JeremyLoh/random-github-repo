import { useRef } from "react"
import { Response, useFetchLanguages } from "./api/useFetchLanguages"
import "./App.css"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"

function App() {
  const abortControllerRef = useRef<AbortController | null>(null)
  const { languages, isLoading, error }: Response =
    useFetchLanguages(abortControllerRef)

  return (
    <>
      <Header />
      {error ? <div>Something went wrong. Please try again later</div> : null}
      {isLoading ? <div>LOADING...</div> : <Dropdown options={languages} />}
    </>
  )
}

export default App
