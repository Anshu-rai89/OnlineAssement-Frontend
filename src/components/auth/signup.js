import React from 'react';
import qs from 'qs'
import {Redirect}  from   'react-router-dom';

import {showSuccessNotification,showerrorNotification}  from '../../common/noty';
class SignUp extends React.Component
{  constructor()
    {
        super();
        this.state={
        email:'',
        password:'',
        name:'',
        confirm_password:''
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
        
        
        const data={
            email:this.state.email[0],
            password:this.state.password[0],
            name:this.state.name[0],
            confirm_password:this.state.confirm_password[0]
        }

        if(data.password==data.confirm_password)
        {
            fetch('http://localhost:9000/user/create',{
                method:'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: qs.stringify(data)
    
                })
                .then(response => response.json())
                .then(data => showSuccessNotification(data.message));

        }
        else{
            showerrorNotification('Password Confirm Password Mismatch');
        }

      

          
    }
    render()
    {
        const token=localStorage.getItem('token');

        if(token)
        {
            return <Redirect to='/'  />
        }
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignIn</h5>

                    <div className="input-field">
                       
                        <input  type="text" id ="name" onChange={this.handleChange} placeholder='name'/>
                    </div>
                    <div className="input-field">
                        
                        <input  type="email" id ="email"   onChange={this.handleChange} placeholder='email'/>
                    </div>
                    <div className="input-field">
                       
                        <input  type="password" id ="password" onChange={this.handleChange} placeholder="password"/>
                    </div>
                    <div className="input-field">
                       
                        <input  type="password" id ="confirm_password" onChange={this.handleChange} placeholder="confirm password"/>
                    </div>
                    
                  
                   
                    <div className="input-field">
                        <button className="btn pink lighten-1 ">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignUp;