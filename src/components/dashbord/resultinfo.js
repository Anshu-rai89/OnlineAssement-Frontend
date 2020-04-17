import React from 'react';

const ResultInfo=(props)=>
{
   
    return (
        
           
            <div  className="row"> 
            <div className="col s100 m9">

            <div className="card">
            
            <span className='btn waves-effect black'style={{marginLeft:'40%'}}>Report</span>
            <div className='card-content'>
            <button className='btn waves-effect green' style={{margin:'20px'}}>{ `Your Percentage score ${localStorage.getItem('score')} %`}</button>
                   
            <button style={{margin:'20px'}}className='btn waves-effect wave'>{localStorage.getItem('msg')}</button>
            </div>
            </div>
            </div>
            </div>
        
                    
                        
    )
}

export default ResultInfo;