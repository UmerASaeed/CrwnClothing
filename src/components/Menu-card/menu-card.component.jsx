import React from 'react'
import './menu-card.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuCard=({title,imageUrl,size,linkUrl,history,match})=>
{
    return(     
        <div className={`${size} menu-card`} onClick={()=> history.push(`${match.path}${linkUrl}`)}>
         <div className='BackgroundImage'
           style={{
            backgroundImage:`url(${imageUrl})`
            }}
         ></div>
         {/* <div style={{backgroundColor:"black"}}></div> */}
            <div className="content">
                <h2 className="contentTitle">{title.toUpperCase()}</h2>
                <span className="subtitle">SHOP NOW</span>            
            </div>
        </div>
    );
}


export default withRouter(MenuCard);