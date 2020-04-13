

export const SHOW_QUESTIONS="SHOW_QUESTIONS";






export const displayquestions=(questions)=>
{
    return (dispatch,getState)=>
    {
        dispatch({type:SHOW_QUESTIONS,questions});
    }
}
