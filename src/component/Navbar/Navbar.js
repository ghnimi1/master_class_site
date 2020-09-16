import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{with:'100%'}}>
                    <a className="navbar-brand" href="#">
                        <img src='./img/logo.png'
                         alt='logo'/>
                         <span style={{color:'white'}}>Master<span style={{color:'#ffaa1f'}}>Class</span></span>
                         </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#services">NOS SERVICES</a>
                            <a className="nav-item nav-link" href="#formations">Nos Formations</a>
                            <a className="nav-item nav-link" href="#equipes">Notre equipe</a>
                            <a className="nav-item nav-link" href="#gallerie">Gallerie</a>
                            <a className="nav-item nav-link" href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;