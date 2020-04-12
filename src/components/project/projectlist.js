import React from  'react';


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

export default QuestionList;