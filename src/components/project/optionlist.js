import React from 'react';
import Option from './option';

const OptionList=(props)=>
{  
    

    const {options,id}=props;
    console.log('options are in options list',options);
     return (
       <div style={{marginTop:'30px'}}>
        {
          options.map((option,index)=>
            <Option  
            
            key={`option-${index}`}
            id={id}
            option={option}
            setAns={props.setAns}
            />
            
            
            )
        
        
         }
    
      </div>
     )
}

export default OptionList;