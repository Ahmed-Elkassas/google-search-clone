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
      return (
        <div className='flex flex-wrap justify-between items-center space-y-6 sm:px-56 px-4'> 
          {results?.results?.map(({link, title}, index) => (
            <div key={index} className="md:w-2/5 w-full"> 
              <a href={link} target="_blank" rel='noreferrer'>
                <p className='text-sm'>{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>{title}</p>
              </a>
            </div>
          ))}
        </div>);
    case '/images':
      return 'images'
  
    default:
      return 'Error!';
  }
}
