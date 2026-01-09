import { useState, useEffect } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || null

const mapEndpointToLocal = (endpoint) => {
  // Map API endpoints to local data modules
  switch (endpoint) {
    case '/api/profile':
      return import('../data/profile').then(m => m.default)
    case '/api/skills':
      return import('../data/skills').then(m => m.default)
    case '/api/experience':
      return import('../data/experience').then(m => m.default)
    case '/api/projects':
      return import('../data/projects').then(m => m.default)
    case '/api/achievements':
      return import('../data/achievements').then(m => m.default)
    default:
      return Promise.reject(new Error('No local data for endpoint'))
  }
}

const useFetch = (endpoint) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        if (API_BASE_URL && endpoint.startsWith('/api/')) {
          // If API URL is provided, use network
          const response = await axios.get(`${API_BASE_URL}${endpoint}`)
          setData(response.data)
        } else {
          // Otherwise load local static data
          const localData = await mapEndpointToLocal(endpoint)
          setData(localData)
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'An error occurred while fetching data')
        console.error('Fetch Error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading, error }
}

export default useFetch