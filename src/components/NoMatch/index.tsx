import { Link } from 'react-router-dom';
import './NoMatch.css';

export default function NoMatch() {
  return (
    <main className='no-match-page'>
      <p>There's nothing here!</p>
      <Link to='/' className='no-match-page__back-link'>
        <span className='material-icons'>arrow_back</span>Go to home
      </Link>
    </main>
  );
}
