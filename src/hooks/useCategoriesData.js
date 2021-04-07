import { useEffect, useState } from 'react'
import axios from 'axios'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setloading] = useState(false)

  const fetchData = async () => {
    setloading(true)
    const URL = 'https://petgram-server-yadu.vercel.app/categories'
    const response = await axios.get(URL)
    setloading(false)
    setCategories(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { categories, loading }
}

export default useCategoriesData
