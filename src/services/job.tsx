import jobs from '../data/jobs.json';

const getJobs = () => {
  return jobs;
};

export const getJobById = (id: string) => {
  const jobs = getJobs();

  return jobs.find((job) => job.id === id);
};
