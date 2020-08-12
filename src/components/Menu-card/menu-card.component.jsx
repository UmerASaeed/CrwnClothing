import React from 'react'
import './menu-card.styles.scss'

const MenuCard=({title,imageUrl,size})=>
{
    return(     
        <div className={`${size} menu-card`}>
         <div className='BackgroundImage'
           style={{
            backgroundImage:`url(${imageUrl})`
            }}
         ></div>
         <div style={{backgroundColor:"black"}}></div>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">SHOP NOW</span>            
            </div>
        </div>
    );
}


export default MenuCard;