import React from  'react';
import Question  from './question';

class QuestionList extends React.Component
{
    
  
    render()
    {
       
      const {questions,setAns}=this.props;
      console.log(questions);
      
    return (
       
        <div className="questionlist section">
            {
            questions && questions.map((question,index)=>
            
                   <Question 

                   key={`Q-${index+1}`}
                   question={question}
                   id={`Q${index+1}`}
                  setAns={setAns}
                    />
            )}

        
            </div>
       
    )
}
}



export default QuestionList;