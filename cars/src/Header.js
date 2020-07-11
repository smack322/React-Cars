import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Learn more about Scott's favorite cars</h1>
                <img id='header-img' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-toyota-gr-supra-138-1581523771.jpg" alt="Toyota Supra" />
                <p>2021 Toyota Supra</p>
            </div>
        )
    }
}

export default Header;