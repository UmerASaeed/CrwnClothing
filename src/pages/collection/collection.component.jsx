import React from 'react'
import {connect} from 'react-redux'
import {selectCollectionData} from "../../redux/shop/shop.selectors"
import ShopItem from "../../components/shop-items/shopItems.component"

import "./collection.styles.scss"

const CollectionPage = ({collectionData})=>
{
    return(
      <div className='collection-page'>
        <h2 className='ctitle'>{collectionData.title}</h2>
        <div className='cItems'>
        {collectionData.items.map(item=>
        {
           return <ShopItem key={item.id} item={item} cName={'collection1'}/>
        })}
        </div>
      </div>  
    );
}

const mapStateToProps = (state,ownProp) =>
{
  return{
    collectionData:selectCollectionData(ownProp.match.params.collectionId)(state)
  }
}

export default connect(mapStateToProps)(CollectionPage);