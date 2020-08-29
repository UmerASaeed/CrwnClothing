import React from 'react'
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"
import ShopCollectionContainer from "../../components/ShopCollection/shopCollectionContainer"
import {connect} from 'react-redux'
import {FetchStartAsync} from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component
{
 
  componentDidMount(){
    const {FetchStartAsync} = this.props
    FetchStartAsync()
  }

  render(){
    const {match,isCollectionsLoaded} = this.props
    return(
      <div>
        <Route exact path={`${match.path}`} component={ShopCollectionContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}/>
      </div>  
    );
  }    
}

const mapDispatchToProps = dispatch =>
{
  return{
    FetchStartAsync:()=>dispatch(FetchStartAsync())
  }
}

const mapsStateToProps = state =>
{
  return{
    // isFetching:selectIsFetching(state),
   
  }
}

export default connect(mapsStateToProps,mapDispatchToProps)(ShopPage);