import ky from "ky"
import { useEffect, useState } from "react"
import Language from "../model/Language"

interface LanguageResponse {
  title: string
  value: string
}

interface Response {
  languages: Language[]
  isLoading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}

function useFetchLanguages() {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [languages, setLanguages] = useState<Language[]>([])
  useEffect(() => {
    async function getAllLanguages() {
      const url =
        "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
      setIsLoading(true)
      try {
        const response: LanguageResponse[] = await ky.get(url).json()
        setLanguages(
          response.map((r, index) => ({ ...r, id: index })) as Language[]
        )
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setError(error as any)
      } finally {
        setIsLoading(false)
      }
    }
    getAllLanguages()
  }, [])
  return { languages, isLoading, error }
}

export { useFetchLanguages, Response }
