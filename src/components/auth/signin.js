import React from 'react';
import {Redirect}  from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

import {showerrorNotification,showSuccessNotification}  from '../../common/noty';

const sessionUrl='http://localhost:9000/user/create-session';

class SignIn extends React.Component
{ 
    constructor()
    {
        super();
        let loggedIn=false;

        const token=localStorage.getItem('token');
        if(token)  loggedIn=true;
   
        this.state={
            email:'',
            password:'',
            loggedIn
            }
    }

    handleChange=(e)=>
    {  this.setState(
        {
        [e.target.id]:[e.target.value]
        });
    }


    handleSubmit=(e)=>
    {   e.preventDefault();

        const {email,password}=this.state;
        const body= qs.stringify({email:email,password:password});
        axios.post(sessionUrl, body, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data=>
            {
                if(data.status === 200)
                {
    
                    console.log(data.data.data.user.name);
                    localStorage.setItem('token',data.data.data.token);
                    localStorage.setItem('name',data.data.data.user.name);
                    localStorage.setItem('id',data.data.data.user._id);
                    localStorage.setItem('result',data.data.data.user.report);
                    showSuccessNotification('Logged in');
                    this.setState({loggedIn:true});
                 }
                 
            }).catch(error=>
                {
                    console.log('in catch',error);
                    showerrorNotification(error.response.data.message)
                });

        //  fetch('http://localhost:9000/user/create-session',{
        //     method:'POST',
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //     body: qs.stringify({email:email,password:password})

        //     })
        // .then(response => response.json())
        // .then(data => 
        //     {
               

           
        //     });
      
        //localStorage.setItem('token',user.token);
        //localStorage.setItem('name',user.user.name);
        //
}
    render()
    {
        if(this.state.loggedIn)
        {
            return <Redirect to='/' />
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignIn</h5>
                    <div className="input-field">
                       
                        <input  type="email" id ="email"   onChange={this.handleChange} placeholder='email'/>
                    </div>
                    <div className="input-field">
                       
                        <input  type="password" id ="password" onChange={this.handleChange} placeholder='password'/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 ">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;