import React from 'react';
import {NavLink,Redirect} from 'react-router-dom';


class SignedinLink extends React.Component
{ constructor()
    {  
        super();
        this.state=
        {
            loggedIn:true
        }
    }
    
    removeUser=()=>
    {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem('name');
        this.setState({loggedIn:false})
    }

    render()
    {
        if(this.state.loggedIn==false)  
        return  <Redirect to='/signin'/>
    return (
        <ul className="right">
            <li><NavLink to='/'>Take Test</NavLink> </li>
            <li><NavLink to='/' onClick={this.removeUser}>Logout</NavLink></li>
    <li><NavLink to='/'className='btn btn-floating pink lighten-1'>{localStorage.getItem('name')}</NavLink></li>
        </ul>
    )
    }
}

export default SignedinLink;