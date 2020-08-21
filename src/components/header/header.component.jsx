import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'
import "./header.styles.scss"

const Header=({currentUser})=>(
    <div className="header">
        <Link to="/">
            <Logo className="logo"/>
        </Link>
        <div className='options'>
            <Link className = "shop" to="/shop">SHOP</Link>
            <Link className = "contact">CONTACT</Link>
            { currentUser ? <div className = "signIn" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='signIn' to='/signin'>SIGN IN</Link>}
        </div>
    </div>  
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);