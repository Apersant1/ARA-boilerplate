import React from 'react'
import Logo from './components/Logo/Logo';
import  '../styles/App.css';
const App = () => {
    return (
        <>
        <Logo/>
        <p style={{textAlign:"center"}}> 🚧 DEV branch 🚧</p>
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
