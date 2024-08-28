import React, {Component} from 'react';
import logo from './images/LOGO.jpg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a className="navbar-brand" style={{fontFamily:'Impact, fantasy'}} href="#"><img src={logo} alt="Logo" style={{ width: '50px', marginRight: '20px', marginRight: '10px' }} /> DSA VISUALIZER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default Navbar;