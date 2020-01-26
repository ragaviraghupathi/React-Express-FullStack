import { combineReducers } from "redux";
import { tasksReducer } from './tasksReducer';
import { usersReducer } from './usersReducer';
import { commentsReducer } from './commentsReducer';
import { groupsReducer } from './groupsReducer';
const rootReducer = combineReducers({
    tasksReducer,
    usersReducer,
    commentsReducer,
    groupsReducer

});
export default rootReducer;