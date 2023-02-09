import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { SearchContext } from './contexts/search.context';

export const App = () => {
  const [search, setSearch] = useState('');

  return <>
    <SearchContext.Provider value={{search, setSearch}}>
      <Header/> 
      <Routes>
        <Route path='/' element={<Map/>}/>
        <Route path='/add' element={<AddForm/>}/>
      </Routes>
    </SearchContext.Provider>
  </>
}