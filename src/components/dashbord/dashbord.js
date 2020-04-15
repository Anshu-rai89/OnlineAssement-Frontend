import React from 'react';

import QuestionList from '../project/projectlist';
class Dashbord extends React.Component
{
     constructor()
     {

        super();
         this.state=
         {
               questions:[],
               loadquestion:false
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
         console.log(e.target.checked);
         console.log('in submit',e);
     }
    

    render()
    {
        const {questions}=this.state;
        console.log(this.state);
        const token=localStorage.getItem('token');
        return (


            <div className='dashboard container'>
                
                { token ? <div className="row">
                  <div className="col s12 m9">
                      <form onSubmit={this.handleSubmit} class='white' >
                      <QuestionList  questions={questions}/>
                      <button className="btn waves-effect orange" type="submit">Submit Test</button>
                      </form>
                  </div>
                 
                </div>
                :
                <div class="row">
                    <div class="col s22 m10" >
                    <div class="card blue darken-3" >
                        <div className='card-content white-text'>
                        <p class className="card-title">Welcome To EDUCHAMP</p>
                      </div>
                        </div>
                    </div>
                    </div>
               
                    }
        </div>
        )
    }
}


export default Dashbord;