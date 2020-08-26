import React from 'react'
import ShopItem from "../shop-items/shopItems.component"
import "./collectionPreview.styles.scss"

const ColletionPreview=({title,items})=>
{
    return(
        <div className="collection-preview">
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='preview'>
                {
                    items.filter((item,index)=>index<4)
                    .map(item=>
                    {
                        return <ShopItem key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default ColletionPreview;