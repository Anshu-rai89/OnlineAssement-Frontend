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

    

    render()
    {
        const {questions}=this.state;
        console.log(questions);
        return (
            <div className='dashboard container'>
                <div className="row">
                  <div className="col s12 m6">
                      <QuestionList  questions={questions}/>
                  </div>
                 {
                     localStorage.getItem('token') && 
                     <div className="col s12 m5 offset-m1 card">
                     <p>Evaluate</p>
                      </div>
                 } 
                </div>
            </div>
        )
    }
}


export default Dashbord;