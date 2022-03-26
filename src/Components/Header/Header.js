import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className='header-area'>
                    <h1 className='title'>U.A. High School</h1>
                    <p className="discription">Donate of Class 1-A</p>
                    <h3> Total Student : <span className="budget-amount">20</span> </h3>
                </div>
            </div>
        </div>
    );
};

export default Header;