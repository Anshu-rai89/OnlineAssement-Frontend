import  React from 'react'

const Option=(props)=>
{
    const {option,id,setAns}=props;
    console.log('options ',option,'id',id);

   
    return (
        <p style={{marginTop:'30px'}}>
            <label>
          <input className="with-gap" id={id} style={{margin:'20px'}}name={option.text} type="radio" onChange={setAns}/>
          <span>{option.text}</span>
           </label>
           </p>
    )
}



export default Option;