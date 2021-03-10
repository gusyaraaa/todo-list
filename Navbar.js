import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav style={{position: "fixed", zIndex: "2"}}>
            <div className="nav-wrapper black darken-1" style={{padding: '0 2rem'}}>
            <NavLink
                className="brand-logo"
                to="/profile"
            >
                Todo List
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <NavLink
                        className="btn-floating btn-large waves-effect waves-light add-btn"
                        to="/create"
                    >
                        <i className="material-icons">add</i>
                    </NavLink>
                </li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
            </div>
        </nav>
    )
}