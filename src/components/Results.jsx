import React, {useEffect} from 'react'
import { useResultContext } from '../Contexts/ResultProvider';

import { useLocation } from 'react-router-dom'
 
export const Results = () => {

  const {results, isLoading, searchTerm, getResults} = useResultContext();

  const location = useLocation();
  
      useEffect(() => {
        getResults('/search/q=Javascript&num=20')
      }, [])

  if(isLoading) return <div className='text-center'>Loading</div>;

  switch (location.pathname) {
    case '/search':
      return 'Searching'
    case '/images':
      return 'images'
  
    default:
      return 'Error!';
  }
}
