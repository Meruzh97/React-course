import './App.css';
import React from 'react';


function App() {
  return (
      <div className='app=wrapper'>
        <header className='header'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png' />
        </header>

        <nav className='nav'>
          <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
          </ul>
        </nav>

        <div className='content'>
          Main content
        </div>

      </div>
  );
}



export default App;