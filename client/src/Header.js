import React from 'react'
import './header.scss'

const Header = () =>{
    return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
               
                <li className="nav-item">
                    <a className="nav-link" href="/todo">Todo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ptt">Ptt</a>
                </li>
                
            </ul>
        </div>
    </nav> */}
    <header>
        <input type="checkbox" id="toggler"></input>
        <label htmlFor="toggler">
        <div className="hamburger-container">
            <span></span>
            <span></span>
        </div>
        </label>
    
        <div className="header-nav-items-rwd">
            <ul>
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/todo">Todo</a></li>
                <li><a className="nav-link" href="/ptt">Ptt八卦版</a></li>
                <li><a className="nav-link" href="/project">資策會專題作品</a></li>
            </ul>
        </div>
        <div className="header-nav-items">
            <ul className="d-flex justify-content-center">
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/todo">Todo</a></li>
                <li><a className="nav-link" href="/ptt">Ptt八卦版</a></li>
                <li><a className="nav-link" href="/project">資策會專題作品</a></li>
            </ul>
        </div>

    </header>
    </>
    )
}

export default Header