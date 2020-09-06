import  {connect} from "react-redux"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import CollectionPage from "./collection.component"
import {isCollectionsLoaded} from "../../redux/shop/shop.selectors"

const mapsStateToProps = state =>
{
    let loadingVal = !isCollectionsLoaded(state)
    return{
        isLoading:loadingVal
    }
}

const collectionPageContainer = connect(mapsStateToProps)(WithSpinner(CollectionPage))

export default collectionPageContainer