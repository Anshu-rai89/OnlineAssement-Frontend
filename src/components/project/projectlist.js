import React from  'react';
import {connect}  from 'react-redux';
import {showQuestions}  from '../../store/action/questionaction';
const QuestionList=(props)=>
{
    const questions=props.questions;
    return (
       
        <div className="questionlist section">
            {questions && questions.map(question=>{
                return (
                    <div className="card question-info">
                    <div className="card-content grey-text text-darken-3">
                         <span className="card-title"> {question.title}</span>
                         <p className="inner">{question.content}</p>
                    </div>
                   </div>
                );
            })}
            </div>
       
    )
}

const mapDispatchToProps=(dispatch)
{   const obj={
                  showQuestions:(question)=>dispatch(showQuestions(question))
              }
      return
}

export default connect(null,mapDispatchToProps)(QuestionList);