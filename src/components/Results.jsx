import React, {useEffect} from 'react'
import { useResultContext } from '../Contexts/ResultProvider';

import { useLocation } from 'react-router-dom'
 
export const Results = () => {

  const {results, isLoading, searchTerm, getResults} = useResultContext();

  const location = useLocation();
  
      useEffect(() => {
        if(searchTerm !== "") {
          if(location.pathname === '/videos') {
            getResults(`/search/q=${searchTerm} videos`)
          } else {
            getResults(`${location.pathname}/q=${searchTerm}&num=30`)
          }
        }
      }, [searchTerm, location.pathname])

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
    case '/image':
      return <div className='flex justify-between items-center flex-wrap'>
        {results?.image_results.map(({image, link: {href, title}}, index) => (
          <a href={href} target="_blank" key={index} rel="noreferrer">
            <img src={image.src} alt={title} loading="lazy" />
            <p className='w-36 break-words text-sm mt-2'>{title}</p>
          </a>
        ) )}
      </div>
  
    default:
      return 'Error!';
  }
}
