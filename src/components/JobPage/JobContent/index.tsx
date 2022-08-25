import './JobContent.css';
import { Job } from '../../Search';

interface JobContentProps {
  job: Job;
}

export default function JobContent({ job }: JobContentProps) {
  return (
    <main className='job-page__information'>
      <article>
        <div className='position-information'>
          <div className='position-information__main'>
            <h2 className='job__title'>{job.title}</h2>
            <span className='job__type'>{job.type}</span>
          </div>
          <time className='job__date' dateTime={job.created_at}>
            &#xe8b5; {new Date(Date.parse(job.created_at)).toDateString()}
          </time>
        </div>
        <div className='company-information'>
          <h3 className='job__company'>{job.company}</h3>
          <span className='job__location'>&#xe80b; {job.location}</span>
        </div>
        <div
          className='job__description'
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
      </article>
    </main>
  );
}
