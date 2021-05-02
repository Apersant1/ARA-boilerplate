import React from 'react'
import Logo from './Logo/Logo';
import  '../../styles/App.css';
const App = () => {
    return (
        <>
        <Logo/>
        ARA is made for
        <div className="dropping-texts">
          <div>Developers</div>
          <div>Designers</div>
          <div>Coders</div>
          <div>EVERYONE!</div>
        </div>
        </>
    )
}

export default App;
