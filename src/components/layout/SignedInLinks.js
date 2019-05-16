import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to='/create/'>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">SN</NavLink></li>
        </ul>

    )
}

export default SignedInLinks;