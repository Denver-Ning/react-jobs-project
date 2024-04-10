export type JobType = {
  id: string
  title: string
  type: string
  description: string
  salary: string
  location: string
}

export type JobListingProps = {
  job: JobType
}
