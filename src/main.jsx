import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Posts from './pages/posts.jsx'
import Details from './pages/Details.jsx'
const router =createBrowserRouter([
  {
    path:'',
    element:<Home/>
  },
  {
    path:'posts/:id',
    element:<Details/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
