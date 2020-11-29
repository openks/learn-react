import axios from 'axios'
import { useState, useEffect } from 'react'

const useHackerNewsApi = () => {
  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(
          `https://hn.algolia.com/api/v1/search?query=${search}`,
        )
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [search])
   return [{ data, isLoading, isError }, setSearch]
}
export default useHackerNewsApi