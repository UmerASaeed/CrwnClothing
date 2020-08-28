import React from 'react'
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"
import ShopCollection from '../../components/ShopCollection/shopCollection.component'
import {firestore,convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import {UpdateCollection} from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"

const ShopCollectionWithSpinner=WithSpinner(ShopCollection)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component
{
  state = {
    loading: true
  };

  unsubscribeFromSnapshot=null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapShot=>{
     const collectionsMap = convertCollectionSnapshotToMap(snapShot)
     updateCollections(collectionsMap)
     this.setState({loading:false})
    }))
  }

  render(){
    const {match} = this.props
    return(
      <div>
        <Route exact path={`${match.path}`} render={(props)=> <ShopCollectionWithSpinner isLoading={this.state.loading} {...props} />}/>  
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={this.state.loading} {...props} />}/>
      </div>  
    );
  }    
}

const mapDispatchToProps = dispatch =>
{
  return{
    updateCollections:collectionMap=>dispatch(UpdateCollection(collectionMap))
  }
}

export default connect(null,mapDispatchToProps)(ShopPage);