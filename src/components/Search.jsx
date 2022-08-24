import React, {useState, useEffect} from 'react';

import {useDebounce} from 'use-debounce'
import { useResultContext } from '../Contexts/ResultProvider';

export const Search = () => {

  const [text, setText] = useState('Elon Musk');
  const {setSearchTerm} = useResultContext();

  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <div className='relative sm:ml-48 md:ml-72'></div>
  )
}
