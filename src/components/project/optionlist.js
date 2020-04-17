import React from 'react';
import Option from './option';

const OptionList=(props)=>
{  
    
  const handleChange=(e)=>
  {
    
      console.log('in optionlist');
       props.setAns({[e.target.id]:[e.target.name]})
  }
    const {options,id,Qid}=props;
    console.log('options are in options list',options);
     return (
       <div style={{marginTop:'30px'}}>
        {
          options.map((option,index)=>
            <Option  
            
            key={`option-${index}`}
           
            id={id}
            option={option}
            setAns={handleChange}
            />
            
            
            )
        
        
         }
    
      </div>
     )
}

export default OptionList;