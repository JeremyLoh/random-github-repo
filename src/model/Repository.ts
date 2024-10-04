// https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
type Repository = {
  id: number
  html_url: string
  name: string
  description: string
  language: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  topics: string[]
}

export default Repository
