import { Job } from '../Search';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/job';
import './Job.css';
import JobAside from './JobAside';
import JobContent from './JobContent';
import { useEffect } from 'react';

export default function JobPage() {
  const { jobId } = useParams();
  const job = getJobById(jobId as string);

  // Scroll page to top when viewing a job
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='job-page'>
      <JobAside content={job?.how_to_apply as string} />
      <JobContent job={job as Job} />
    </section>
  );
}
