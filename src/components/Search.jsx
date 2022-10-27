import React, {useState, useEffect} from 'react';

import {useDebounce} from 'use-debounce'
import { useResultContext } from '../Contexts/ResultProvider';
import { Links } from './Links';

export const Search = () => {

  const [text, setText] = useState('');
  const {setSearchTerm} = useResultContext();

  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue])

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input value={text} type="text" onChange={(event) => setText(event.target.value)} className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full outline-none shadow-sm px-3 focus:shadow-lg dark:text-gray-900' />
      {text &&
      <button className='absolute top-0.5 right-4 text-2xl text-gray-800' onClick={() => setText("")}>x</button>}
      <Links />
    </div>
  )
}
