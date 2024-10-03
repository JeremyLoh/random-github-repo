import { useRef, useState } from "react"
import "./App.css"
import { Response, useFetchLanguages } from "./api/useFetchLanguages"
import fetchRandomRepository from "./api/fetchRandomRepository"
import Dropdown from "./components/Dropdown"
import Header from "./components/Header"
import RepositoryCard from "./components/RepositoryCard"
import Repository from "./model/Repository"

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [repository, setRepository] = useState<Repository | null>(null)
  const languageAbortControllerRef = useRef<AbortController | null>(null)
  const { languages, isLoading, error }: Response = useFetchLanguages(
    languageAbortControllerRef
  )
  const repositoryAbortControllerRef = useRef<AbortController | null>(null)
  async function handleSelectLanguage(language: string) {
    setSelectedLanguage(language)
    setRepository(
      await fetchRandomRepository(language, repositoryAbortControllerRef)
    )
  }

  return (
    <>
      <Header />
      {error ? <div>Something went wrong. Please try again later</div> : null}
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <>
          <Dropdown
            options={languages}
            handleSelectOption={handleSelectLanguage}
          />
          <RepositoryCard
            selectedLanguage={selectedLanguage}
            repository={repository}
          />
        </>
      )}
    </>
  )
}

export default App
