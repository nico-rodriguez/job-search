import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import JobPage from './components/JobPage';
import NoMatch from './components/NoMatch';
import Search from './components/Search';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/jobs/:jobId' element={<JobPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
