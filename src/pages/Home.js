import { useState } from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import SubHeader from './SubHeader';

function HomePage() {
    
  return (
        <div>
            <body>
                <Header/>
                <SubHeader/>
            </body>
            
        </div>
        
    );

}

export default HomePage;
