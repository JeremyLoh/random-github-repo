import ky from "ky"
import Repository from "../model/Repository"

type Response = {
  items: Array<Repository>
  total_count: number
  incomplete_results: boolean
}

const ORDER_CRITERIA = ["stars", "forks", "help-wanted-issues", "updated"]
const PER_PAGE = "100"

function getRandomElement<T>(array: Array<T>): T {
  return array[(array.length * Math.random()) | 0]
}

// https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
async function fetchRandomRepository(
  language: string,
  repositoryAbortControllerRef: React.MutableRefObject<AbortController | null>
) {
  repositoryAbortControllerRef.current?.abort()
  repositoryAbortControllerRef.current = new AbortController()
  const { signal } = repositoryAbortControllerRef.current
  const url: string = "https://api.github.com/search/repositories"
  // random sorting by order criteria, then select one using random index
  const searchParams = new URLSearchParams({
    q: `language:${language}`,
    sort: getRandomElement(ORDER_CRITERIA),
    order: "desc",
    per_page: PER_PAGE,
  })
  try {
    const response: Response = await ky
      .get(url, { searchParams, signal })
      .json()
    const items: Repository[] = response["items"]
    return getRandomElement(items) || null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.name === "AbortError") {
      console.error("Aborted get random repository")
    }
  }
  return null
}

export default fetchRandomRepository
