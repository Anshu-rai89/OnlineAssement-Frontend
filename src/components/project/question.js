import React from 'react';
import OptionList from './optionlist';
import { black } from 'color-name';
const Question=(props)=>
{
    const {question,id,setAns}=props;
    console.log('in question list otions are',question.options);
    let color;
    if(question.tag=='easy') color='green';
    else if(question.tag=='medium') color='yellow';
    else color='red';
    return (
        <div className="card question-info">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {id}</span> 

                   <span style={{marginTop:'-55px',marginLeft:'270px',color:'black'}}className={`btn waves-effect ${color}`} >{question.tag}</span>
   
                    <p className="inner">{question.title}</p>

                    <OptionList options={question.options} id={id} setAns={setAns}/>
            </div>
        </div>
    )
}


export default Question;