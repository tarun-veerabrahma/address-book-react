import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../../views/homePage/homePage';
import './AppRouter.scss'

export default class AppRouter extends React.Component{
    
    render(): React.ReactNode {
        return(
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/addContact' element={<Home addIsClicked={true}/>}/>
                    
                </Routes>
        );
    }
}