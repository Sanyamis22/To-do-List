import {combineReducers} from 'redux';
import TaskReducers from './redux/reducers/TaskReducers';

const rootReducer = combineReducers({
    Task : TaskReducers,
});
export default rootReducer;