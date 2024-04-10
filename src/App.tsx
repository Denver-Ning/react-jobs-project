import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import { JobType } from './types/Job'

const App = () => {

  const addJob = async (job:JobType) => {
    await fetch(`/api/jobs`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
