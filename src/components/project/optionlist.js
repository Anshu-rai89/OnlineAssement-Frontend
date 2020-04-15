import React from 'react';
import Option from './option';

const OptionList=(props)=>
{  
    

    const options=props.options;
    console.log('options are in options list',options);
     return (
       <div style={{marginTop:'30px'}}>
        {
          options.map((option,index)=>
            <Option  
            
            key={`option-${index}`}
            id={index+1}
            option={option}
            setAns={props.setAns}
            />
            
            
            )
        
        
         }
    
      </div>
     )
}

export default OptionList;