import React from 'react';
import AppRouter from './components/partials/AppRouter/AppRouter';
import {NavLink} from 'react-router-dom';
import '../styles/App.css'
function App() {
  return (
    <div className="appHeader">
        <div className='appTitle'><span className='label'>Address Book</span></div>
        <AppRouter />
    </div>
  );
}




export default App;
