import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Results } from './Results';

export const RoutesComp = () => {
  const renderMultiResults = ['/search', '/images', '/news', 'videos'].map((path, index) => {
    return <Route path={path} element={<Results />} key={index} />
  })

  return (
    <div className='py-3'>
      <Routes>
        <Route path='/' element={<Navigate replace to="/search" />} />
        {renderMultiResults}
      </Routes>
    </div>
  )
}
