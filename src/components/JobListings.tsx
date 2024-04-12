import { useState, useEffect } from 'react'
import { JobType } from '../types/Job';
import JobListing from './JobListing'
import Spinners from './Spinners';
import { fetchJobs } from '@/api/job'

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);

  const apiUrlLimit = isHome ? 3 : 0;

  useEffect(() => {
    fetchJobs(apiUrlLimit)
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.log('Error fetching data', err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        {loading ? <Spinners loading={loading} /> : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              jobs.map((job) =>
              (
                <JobListing key={job.id} job={job} />
              ))
            }
          </div>
        )}

      </div>
    </section>
  )
}

export default JobListings
