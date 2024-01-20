import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Component
import HomePage from '@/routes/HomePage.tsx'

// Css
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
