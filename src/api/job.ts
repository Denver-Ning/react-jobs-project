import { JobType } from '@/types'
export const fetchJobs = async (limit?: number) => {
  const apiUrl = limit ? `?_limit=${limit}` : '';
  const res = await fetch(`/api/jobs${apiUrl}`);
  const data = await res.json();
  return data;
}
export const addJob = async (job: JobType) => {
  await fetch(`/api/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
  return;
}

export const deleteJob = async (id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  })
}

export const updateJob = async (job: JobType) => {
  await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(job)
  })
}
