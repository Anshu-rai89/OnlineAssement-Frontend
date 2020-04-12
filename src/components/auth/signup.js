import React from 'react';

class SignUp extends React.Component
{
    state={
       email:'',
       password:'',
       name:''
    }

    handleChange=(e)=>
    {  this.setState(
        {
        [e.target.id]:[e.target.value]
        });
    }

    handleSubmit=(e)=>
    {   e.preventDefault();
        console.log(this.state);
    }
    render()
    {
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