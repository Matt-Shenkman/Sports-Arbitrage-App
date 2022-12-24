import { useState } from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import SubHeader from './SubHeader';
import ArbitrageDetector from './Arbitrage';

function HomePage() {
    
  return (
        <div>
            <body>
                <Header/>
                <SubHeader/>
                <ArbitrageDetector/>
            </body>
            
        </div>
        
    );

}

export default HomePage;
