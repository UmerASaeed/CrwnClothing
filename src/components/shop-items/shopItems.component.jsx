import React from 'react'
import "./shopItem.styles.scss"

const ShopItem=({name,imageUrl,price})=>
{
    return(
        <div className="ShopItem">
            <div className="content">
                <div className="bg-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
                <div className="footer">
                    <div className="name">{name}</div>
                    <div className="price">{"$" + price}</div> 
               </div>   
            </div>
        </div>
    );
}

export default ShopItem;