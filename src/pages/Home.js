import { useState } from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import SubHeader from './SubHeader';

function HomePage() {
    
  return (
        <div>
            <Routes id = 'routes'>
            <Route path="/" element={<Header/>} />
            <Route path="/" element={<SubHeader/>} />
            </Routes>

            <div class = "body">
            
            </div>
        </div>
    );

}

export default HomePage;
