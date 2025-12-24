import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState(null)
//   useEffect(() => {
//     fetch('https://api.github.com/users/DevDobariya75')
//       .then(res => res.json())
//       .then(d => {
//         console.log(d)
//         setData(d)
//       })
//       .catch(err => console.error('GitHub fetch error:', err))
//   }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github: {data ? data.id : 'loading...'}

      <img className='text-center' src={data.avatar_url} alt="Git picture" width={300} />
    </div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DevDobariya75')
    return response.json()
}