import React from  'react';
import Question  from './question';

class QuestionList extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            opt:''
        }
    }
    setAns=(e)=>
    {
          this.setState({[e.target.id]:[e.target.value]});
    }
    render()
    {
        console.log(this.state);
      const questions=this.props.questions;
      console.log(questions);
      let token=localStorage.getItem('token');
      
    return (
       
        <div className="questionlist section">
            {
            token && questions && questions.map((question,index)=>
            
                   <Question 

                   key={`Q-${index+1}`}
                   question={question}
                   id={index+1}
                   setAns={this.setAns}
                    />
            )}

         { token && <button class="btn waves-effect waves-light" type="submit" name="action">Submit Test
           
        </button>}
            </div>
       
    )
}
}



export default QuestionList;