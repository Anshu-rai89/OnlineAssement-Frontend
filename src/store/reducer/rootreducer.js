import {combineReducers} from 'redux';

import authReducer from './authreducer';
import questionReducer from './questionreducer';


const rootReducer=combineReducers({
    auth:authReducer,
    question:questionReducer
}
);


export default rootReducer;