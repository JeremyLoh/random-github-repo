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

function useFetchLanguages(
  abortControllerRef: React.MutableRefObject<AbortController | null>
) {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [languages, setLanguages] = useState<Language[]>([])
  useEffect(() => {
    async function getAllLanguages() {
      // cancel any existing request, cannot reuse same abort controller
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()
      const { signal } = abortControllerRef.current
      const url =
        "https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json"
      setIsLoading(true)
      try {
        const response: LanguageResponse[] = await ky
          .get(url, { signal })
          .json()
        setLanguages(
          response.map((r, index) => ({ ...r, id: index })) as Language[]
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.error("Aborted request for getting all languages")
          return
        }
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getAllLanguages()
  }, [abortControllerRef])
  return { languages, isLoading, error }
}

export { useFetchLanguages }
export type { Response }
