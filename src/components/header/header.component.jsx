import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropDown from "../cart-dropdown/cart-dropdwon.component"
import {HeaderContainer,LogoContainer,OptionsContainer,LinkOptionsContainer,SignInContainer} from './header.styles'
import {signOutStart} from "../../redux/user/user.action"

const Header=({currentUser,hidden,signOutStart})=>
{
    return( 
        <HeaderContainer>
            <Link to="/">
                <LogoContainer/>
            </Link>
            <OptionsContainer>
                <LinkOptionsContainer to="/shop">SHOP</LinkOptionsContainer>
                <LinkOptionsContainer>CONTACT</LinkOptionsContainer>
                { currentUser ? <SignInContainer onClick={signOutStart}>SIGN OUT</SignInContainer> : <LinkOptionsContainer to='/signin'>SIGN IN</LinkOptionsContainer>}
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

const mapDispatchToProps = dispatch =>{
    return{
        signOutStart:()=>dispatch(signOutStart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);