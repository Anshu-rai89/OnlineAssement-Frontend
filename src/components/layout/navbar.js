import React from 'react';
import {Link} from 'react-router-dom';


import SignedInLink  from '../layout/signinlink';
import SignedOutLink from  '../layout/signoutlink';
const Navbar=()=>
{
    return (
        <nav className="nav-wrapper grey darken-3 ">
           <div className="container">
               <Link to='/' className="brand-logo">CBT</Link>
               <SignedInLink />
               <SignedOutLink />
               </div>  

        </nav>
    )
}

export default Navbar;