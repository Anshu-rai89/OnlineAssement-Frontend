import React from 'react';
import OptionList from './optionlist';
const Question=(props)=>
{
    const {question,setAns,id}=props;
    console.log('in question list otions are',question.options);

    return (
        <div className="card question-info">
                    <div className="card-content grey-text text-darken-3">
    <span className="card-title"> {`Q-${id}`}</span> <span style={{marginTop:'-55px',marginLeft:'270px'}}className='btn waves-effect waves-light'>{question.tag}</span>
   
                         <p className="inner">{question.title}</p>

                         <OptionList options={question.options} saveAns={setAns}/>
                    </div>
                   </div>
    )
}


export default Question;