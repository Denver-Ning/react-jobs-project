export type JobType = {
  id: string
  title: string
  type: string
  description: string
  salary: string
  location: string
  company:{
    name: string
    description: string
    contactPhone: string
    contactEmail: string
  }
}

export type JobListingProps = {
  job: JobType
}
