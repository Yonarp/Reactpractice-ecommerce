import React from 'react';
import './homepage.style.scss';

const Homepage = () => {
    return(
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1>HATS</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Jackets</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Sneakers</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Womens</h1>
                    <span>Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Mens</h1>
                    <span>Shop Now</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Homepage;