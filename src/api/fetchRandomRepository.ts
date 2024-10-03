import ky from "ky"
import Repository from "../model/Repository"

type Response = {
  items: Array<Repository>
  total_count: number
  incomplete_results: boolean
}

async function fetchRandomRepository(
  language: string,
  repositoryAbortControllerRef: React.MutableRefObject<AbortController | null>
) {
  repositoryAbortControllerRef.current?.abort()
  repositoryAbortControllerRef.current = new AbortController()
  const { signal } = repositoryAbortControllerRef.current
  // https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
  const url: string = "https://api.github.com/search/repositories"
  // TODO random sorting so that random repo will be done, get random 10 repos, then random index select one
  const searchParams = new URLSearchParams({
    q: `language:${language}`,
    per_page: "1",
  })
  try {
    const response: Response = await ky
      .get(url, { searchParams, signal })
      .json()
    const items: Repository[] = response["items"]
    return items[0] || null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("Aborted get random repository")
    }
  }
  return null
}

export default fetchRandomRepository
