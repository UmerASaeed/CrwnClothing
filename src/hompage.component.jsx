import React from 'react';
import './homepage.styles.scss';

const HomePage=()=>
{
    return(
        <div className="homePage">
            <div className="menu-directory">
                <div className="menu-card">
                    <div className="content">
                        <h2 className="title">HATS</h2>
                        <span className="subtitle">SHOP NOW</span>            
                    </div>
                </div>
                <div className="menu-card">
                    <div className="content">
                        <h2 className="title">JACKETS</h2>
                        <span className="subtitle">SHOP NOW</span>            
                    </div>
                </div>
                <div className="menu-card">
                    <div className="content">
                        <h2 className="title">SNEAKERS</h2>
                        <span className="subtitle">SHOP NOW</span>            
                    </div>
                </div>
                <div className="menu-card1">
                    <div className="content">
                        <h2 className="title">WOMEN</h2>
                        <span className="subtitle">SHOP NOW</span>            
                    </div>
                </div>
                <div className="menu-card1">
                    <div className="content">
                        <h2 className="title">MEN</h2>
                        <span className="subtitle">SHOP NOW</span>            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;