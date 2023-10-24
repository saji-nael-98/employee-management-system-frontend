import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from '../pages/router'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export { App } 