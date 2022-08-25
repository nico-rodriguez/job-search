import { Items } from './Items/index';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Job } from '..';
import './SearchResults.css';

interface SearchResultsProps {
  results: Job[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  const ITEMS_PER_PAGE = 5;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<Job[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets, not page offsets
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + ITEMS_PER_PAGE;
    setCurrentItems(results.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(results.length / ITEMS_PER_PAGE));
  }, [itemOffset, ITEMS_PER_PAGE, results]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: React.MouseEvent & { selected: number }) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % results.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='form__results'>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel='<'
        containerClassName='paginator'
        pageClassName='paginator__page'
        breakClassName='paginator__ellipsis'
        activeClassName='paginator__page--active'
        previousClassName='paginator__previous'
        nextClassName='paginator__next'
      />
    </div>
  );
}
