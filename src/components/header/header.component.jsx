import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../cart-dropdown/cart-dropdwon.component"
import {HeaderContainer,LogoContainer,OptionsContainer,LinkOptionsContainer,SignInContainer} from './header.styles'


const Header=({currentUser,hidden})=>
{
    return( 
        <HeaderContainer>
            <Link to="/">
                <LogoContainer/>
            </Link>
            <OptionsContainer>
                <LinkOptionsContainer to="/shop">SHOP</LinkOptionsContainer>
                <LinkOptionsContainer>CONTACT</LinkOptionsContainer>
                { currentUser ? <SignInContainer onClick={() => auth.signOut()}>SIGN OUT</SignInContainer> : <LinkOptionsContainer to='/signin'>SIGN IN</LinkOptionsContainer>}
                <CartIcon/>
                { !hidden ? <CartDropDown /> : null }
            </OptionsContainer>
        </HeaderContainer>
   ); 
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden:state.cart.hidden,
})

export default connect(mapStateToProps)(Header);