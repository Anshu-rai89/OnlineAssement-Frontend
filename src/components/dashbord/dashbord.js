import React from 'react';
import axios from 'axios';
import qs from 'qs';
import QuestionList from '../project/projectlist';
import Result from '../dashbord/result';
import {showerrorNotification}  from '../../common/noty';
import {Redirect}  from 'react-router-dom';
const token=localStorage.getItem('token');
class Dashbord extends React.Component
{
     constructor()
     {

        super();
         this.state=
         {
               questions:[],
               loadquestion:false,
               Q1:'',
               toggle:false
         }

         
     }


     componentDidMount()
     {
        
        fetch('http://localhost:9000/api/v1/question/getQuestions')
        .then(response => response.json())
        .then(data => this.setState({questions:data.data}));
     }


     handleSubmit(e)
     {
         e.preventDefault();

        // this.setState({[e.target.id]:[e.target.value]});
         let data=this.state;
         delete data.questions;
         delete data.toggle;
         data['id']=localStorage.getItem('id');
        
         data=qs.stringify(data);
         axios.post('http://localhost:9000/user/result', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                
            }
        }).then(data=>
            {
                console.log('in axios',data);
                localStorage.setItem('score',data.data.data.score);
                localStorage.setItem('msg',data.data.data.msg);
               this.setState({toggle:false});
            })
            .catch(err=>showerrorNotification(err.response.data));
     
    }

     setAns(obj)
     {
         this.setState(obj);
     }
    
     handleToggle()
     {
        const {toggle}=this.state;
         this.setState({toggle:!toggle})
     }
     

    render()
    {
        const {questions,toggle}=this.state;
        console.log(this.state);
        const token=localStorage.getItem('token');
        return (


            <div className='dashboard container'>
                
                { token && !toggle ? <div className="row">
                  <div className="col s12 m10">
                      <form onSubmit={this.handleSubmit.bind(this)} class='white' >
                      <QuestionList  questions={questions} setAns={this.setAns.bind(this)}/>
                      <button className="btn waves-effect orange" type="submit">Submit Test</button>
                      </form>
                  </div>
                  <div className="col s22 m1" style={{marginTop:'17%',marginLeft:'10px'}}>
                    {
                       
                        <button className="btn waves-effect orange" onClick={this.handleToggle.bind(this)}>PastResults</button>
                    } 
                    </div>
                 
                </div>
                :token?<div>  </div>:
               
                    <div id='row-result' style={{margin:'10%',height:'400px'}}> 
                    

                   
                    
                   
                   <div  style={{textAlign:'center', marginTop:'60px'}}>
                   <span  style={{marginLeft:'30%' }}></span>
                   <br></br><br></br><br></br>
                       <h4 style={{textAlign:'center'}}>Welcome To EDUCHAMP</h4>
                
                       <span className='btn waves-effect waves 'style={{textAlign:'center'}}>Thier is No success without failure</span>
                       
                       <br></br><br></br><br></br><br></br>
                     <button style={{textAlign:'center'}}className='btn waves-effect orange'>Lets Gets Started</button>
                     </div>
                       
                   
                    
                    </div>
               
                    }
            {
                token && toggle && <Result  toggle={this.handleToggle.bind(this)} />
            }
                
        </div>

       
        )
    }
}


export default Dashbord;