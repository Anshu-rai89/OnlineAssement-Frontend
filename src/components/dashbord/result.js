import React from 'react'
import ResultInfo  from './resultinfo';
const Result=(props)=>
{
    const {toggle}=props;
    const result=localStorage.getItem('result');

    
    return(
        <div>
        <div style={{height:'70%',width:'70%',margin:'5%',display:'flex'}}>
          
         

          
            
            {  localStorage.getItem('score') ?
                            <ResultInfo />
                        
                            
                      
                     :<h4 className='waves-effect blue' style={{color:'red'}}>You havent Given Any Test</h4>
             }
              
                
          </div>
          <button className="btn waves-effect orange" style={{marginLeft:'20%'}}onClick={toggle}>Take Test</button>
             </div>
            
          
    )
}


export default Result;