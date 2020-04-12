import React from 'react';
import {connect}  from 'react-redux';

import QuestionList from '../project/projectlist';
class Dashbord extends React.Component
{
    render()
    {
        const {questions}=this.props;
        console.log(questions);
        return (
            <div className='dashboard container'>
                <div className="row">
                  <div className="col s12 m6">
                      <QuestionList  questions={questions}/>
                  </div>
                  <div className="col s12 m5 offset-m1">
                     <p>Evaluate</p>
                  </div>
                </div>
            </div>
        )
    }
}

const mapSateToProps= (state)=>
{   const questions={
                 questions:state.question.questions  
            }
    return questions;
}
export default connect(mapSateToProps)(Dashbord);