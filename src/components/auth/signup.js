import React from 'react';
import qs from 'qs'
import {Redirect}  from   'react-router-dom';
class SignUp extends React.Component
{  constructor()
    {
        super();
        this.state={
        email:'',
        password:'',
        name:''
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
            name:this.state.name[0]
        }


        console.log(qs.stringify(data));
   
        fetch('http://localhost:9000/user/create',{
            method:'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: qs.stringify(data)

        })
            .then(response => response.json())
            .then(data => console.log(data.msg));
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
                        <label htmlFor="email" >Email</label>
                        <input  type="email" id ="email"   onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input  type="password" id ="password" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="name" >name</label>
                        <input  type="text" id ="name" onChange={this.handleChange}/>
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