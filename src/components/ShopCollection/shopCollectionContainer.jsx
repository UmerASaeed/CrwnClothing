import ShopCollection from '../../components/ShopCollection/shopCollection.component'
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import {isCollectionsLoaded} from "../../redux/shop/shop.selectors"
import {connect} from "react-redux"
import {compose} from 'redux'


const mapStateToProps = state =>
{
    let loadingVal = !isCollectionsLoaded(state)
    return{
        isLoading:loadingVal
    }
}

const ShopCollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ShopCollection)

export default ShopCollectionContainer