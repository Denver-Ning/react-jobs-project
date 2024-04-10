import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='jobs' element={<JobsPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
