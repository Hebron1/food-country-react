import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Dashboard.jsx'
import { HeroUIProvider } from '@heroui/react'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage.jsx'
import Food from './components/Food.jsx'
import CardFood from './components/CardFood.jsx'
import Dashboard from './Dashboard.jsx'
import HomePage from './components/HomePage.jsx'
import FoodArea from './components/FoodArea.jsx'

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "*", element: <NotFoundPage />},
  {path:"/dashboard", element: <Dashboard />},
  {path: "/filter-categories/:name", element: <Food />},
  {path: "/filter-area/:country", element: <CardFood />},
  {path: "/world-food", element: <FoodArea />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
        <RouterProvider router={router} />
      </HeroUIProvider>
    </Provider>
  </StrictMode>,
)
