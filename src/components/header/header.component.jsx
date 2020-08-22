import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../cart-dropdown/cart-dropdwon.component"

import "./header.styles.scss"

const Header=({currentUser,hidden})=>(
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link className = "shop" to="/shop">SHOP</Link>
            <Link className = "contact">CONTACT</Link>
            { currentUser ? <div className = "signIn" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='signIn' to='/signin'>SIGN IN</Link>}
            <CartIcon className='cart'/>
            { !hidden ? <CartDropDown/> : null }
        </div>
    </div>  
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden:state.cart.hidden
})

export default connect(mapStateToProps)(Header);