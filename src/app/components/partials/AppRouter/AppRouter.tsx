import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../../views/homePage/homePage';
import './AppRouter.scss'

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/addContact' element={<Home addIsClicked={true}/>}/>
            
        </Routes>
    );
}