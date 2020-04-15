import React from 'react';
import {Redirect}  from 'react-router-dom';
import qs from 'qs';

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
         
         let user;

         fetch('http://localhost:9000/user/create-session',{
            method:'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: qs.stringify({email:email,password:password})

            })
        .then(response => response.json())
        .then(data => 
            {
                console.log('info is ',data.data.user);
             localStorage.setItem('token',data.data.token);
             localStorage.setItem('name',data.data.user.name);
             localStorage.setItem('id',data.data.user.id);
             this.setState({loggedIn:true});
            });
      
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
                        <label htmlFor="email" >Email</label>
                        <input  type="email" id ="email"   onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input  type="password" id ="password" onChange={this.handleChange}/>
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