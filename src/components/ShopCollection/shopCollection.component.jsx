import React from 'react'
import SHOP_DATA from './ShopData'
import ColletionPreview from '../CollectionPreview/CollectionPreview.component';

class ShopCollection  extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            collection:SHOP_DATA
        }
    }

    render()
    {
        return(
            <div className='collection-preview'>
               {
                    this.state.collection.map(({id,...restParams})=>
                    {
                        return <ColletionPreview key={id} {...restParams}/>
                    })
               }
            </div>
        );
    }
}


export default ShopCollection;