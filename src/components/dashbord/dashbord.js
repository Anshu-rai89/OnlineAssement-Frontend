import React from 'react';
import QuestionList from '../project/projectlist';
class Dashbord extends React.Component
{
    render()
    {
        return (
            <div className='dashboard container'>
                <div className="row">
                  <div className="col s12 m6">
                      <QuestionList />
                  </div>
                  <div className="col s12 m5 offset-m1">
                     <p>Evaluate</p>
                  </div>
                </div>
            </div>
        )
    }
}

export default Dashbord;