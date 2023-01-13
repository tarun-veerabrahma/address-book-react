import AppRouter from './components/partials/AppRouter/AppRouter';
import './App.scss'
import BlogIcon from '../media/icons/blogIcon.jpg'
import { BrowserRouter, NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="appHeader">
        <div className='appTitle'><span className='label'>Address Book</span></div>
        <BrowserRouter>
            <div className="navigation">
              <div className="navigationItem" ><NavLink className={'navigationLink'} to="/">Home</NavLink></div>
              <div className="navigationItem"><NavLink className={'navigationLink'} to="/addContact">+Add</NavLink></div>
              <img className="rightChildIcon" src={BlogIcon}/>
            </div>
            
            <AppRouter />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
