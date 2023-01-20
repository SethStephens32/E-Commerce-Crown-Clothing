import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { signOutAuth } from '../../utils/firebase/firebase.utils'
import './Navigation.styles.scss'

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    // console.log(currentUser)

    const signOut =  async() => {
        await signOutAuth()
        setCurrentUser(null)
    }

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    {currentUser ? <Link className='nav-link' to='/auth' onClick={signOut}>Sign Out</Link> : (<Link className='nav-link' to='/auth'>Sign In</Link>)}
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Navigation;
