import { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token') // Get token at runtime

      if (!token) {
        setError('No token found ❌')
        return
      }

      setLoading(true)

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const result = await res.json()

        if (!res.ok) {
          throw new Error(result.message || 'Request failed 👎')
        }

        setData(result.data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }

    fetchData()
  }, [url])

  return { data, error, loading }
}

export default useFetchData
