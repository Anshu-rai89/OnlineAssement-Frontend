import React from 'react';
import {NavLink} from 'react-router-dom';


const SignedinLink=()=>
{
    return (
        <ul className="right">
            <li><NavLink to='/'>Take Test</NavLink> </li>
            <li><NavLink to='/'>Logout</NavLink></li>
            <li><NavLink to='/'className='btn btn-floating pink lighten-1'>Anshu</NavLink></li>
        </ul>
    )
}

export default SignedinLink;