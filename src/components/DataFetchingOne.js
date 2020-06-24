import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchingOne = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [post, setPost] = useState({})

	useEffect(() => {
    axios.get('https://jsonplaceholder.typicod.com/posts/1')
      .then(response => {
        setLoading(false)
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, [])

	return <div>
    {loading ? 'Loading' : post.title}
    {error && error}
  </div>
}

export default DataFetchingOne
