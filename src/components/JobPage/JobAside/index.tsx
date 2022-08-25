import './JobAside.css';
import { Link } from 'react-router-dom';

interface JobAsideProps {
  content: string;
}

export default function JobAside({ content }: JobAsideProps) {
  return (
    <aside className='job-page__aside'>
      <Link className='aside__link-back' to='/'>
        <span className='material-icons'>arrow_back</span>
        Back to search
      </Link>
      <h3 className='aside__title'>How to apply</h3>
      <div
        className='aside__content'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </aside>
  );
}
