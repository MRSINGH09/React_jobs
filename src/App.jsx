import { createBrowserRouter,RouterProvider,Route ,createRoutesFromElements} from 'react-router-dom'
import "./index.css"
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import NotFoundPage from './pages/NotFoundPage'
import Job,{jobLoader}from './pages/Job'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'




  
 export default function App() {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // delete Job by id
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

   // Edit Job
   const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='/jobs' element={<Jobs />} />
    <Route path='/addJob' element={<AddJobPage addJobSubmit={addJob} />} />
    <Route
      path='/edit-job/:id'
      element={<EditJobPage updateJobSubmit={updateJob} />}
      loader={jobLoader}
    />
    <Route
      path='/job/:id'
      element={<Job deleteJob={deleteJob} />}
      loader={jobLoader}
    />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))


  
  return (
    <RouterProvider router={router}/>
  )
  }


