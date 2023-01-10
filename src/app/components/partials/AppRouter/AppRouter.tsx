import React from "react";
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Home from '../../views/homePage/homePage';
import NotFound from '../../views/notFoundPage';
import AddContact from '../../elements/contactForm/contactForm'
import '../../../../styles/AppRouter.css'
import ContactDetails from "../../elements/contactDetails/contactDetails";



export default class AppRouter extends React.Component{
    
    render(): React.ReactNode {
        return(
            <BrowserRouter>
                <div className="navigation">
                    <div className="navigationItem" ><NavLink className={'navigationLink'} to="/">Home</NavLink></div>
                    <div className="navigationItem"><NavLink className={'navigationLink'} to="/addContact">+Add</NavLink></div>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/addContact' element={<Home addIsClicked={true}/>}/>
                    
                </Routes>
            </BrowserRouter>
        );
    }
}