import React from 'react'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectShopDataPreview} from "../../redux/shop/shop.selectors"
import ColletionPreview from '../CollectionPreview/CollectionPreview.component';
import "./shopCollection.styles.scss";

const ShopCollection = ({collection}) =>
{
    return(
        <div className='collection'>
            {
                collection.map(({id,...restParams})=>
                {
                    return <ColletionPreview key={id} {...restParams}/>
                })
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collection:selectShopDataPreview
})


export default connect(mapStateToProps)(ShopCollection);