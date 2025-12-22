import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App ! | chai</h1>
    </div>
  )
}

// const reactElement = {
//     type : 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google'
// }
const anthorUser = "Good Moring"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
    },
    'click me to visit google',
    anthorUser
)

const anthorElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

createRoot(document.getElementById('root')).
render(

  reactElement

)
