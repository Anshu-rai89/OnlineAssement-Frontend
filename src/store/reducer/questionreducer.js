import {SHOW_QUESTIONS}  from '../action/questionaction';

const initialState={
    
    questions:[
    {
        id:1,
        title:'Q 1',
        content:'what is root of 3'
    },
    {
        id:2,
        title:'Q 2',
        content:'what is sqaure of 6'
    },
    {
        id:1,
        title:'Q 3',
        content:"prime factor of 21"
    }
]
};

const questionReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case SHOW_QUESTIONS:{
            console.log('show question');}
         default:
            return state;

    }

    
}


export default questionReducer;