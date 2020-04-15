import React from  'react';
import Question  from './question';

class QuestionList extends React.Component
{
    
  
    render()
    {
        console.log(this.state);
      const questions=this.props.questions;
      console.log(questions);
      
    return (
       
        <div className="questionlist section">
            {
            questions && questions.map((question,index)=>
            
                   <Question 

                   key={`Q-${index+1}`}
                   question={question}
                   id={`Q-${index+1}`}
                  
                    />
            )}

        
            </div>
       
    )
}
}



export default QuestionList;