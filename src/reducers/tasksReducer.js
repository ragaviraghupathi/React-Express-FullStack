import { defaultState } from '../../server/defaultState';
import { CREATE_TASK, SET_TASK_GROUP ,SET_TASK_NAME} from '../actions/actionConstants';
import { SET_TASK_COMPLETE} from '../actions/actionConstants';

export const tasksReducer = ( tasks=defaultState.tasks, action) => {
    switch (action.type) {
        case CREATE_TASK:
            console.log(action.taskId + action.groupId + action.userId);
            return [...tasks, {
                name: `New task ${action.taskId}`,
                id: action.taskId,
                group: action.groupId,
                owner: action.userId,
                isComplete: false
            }]
        case SET_TASK_COMPLETE:
            return (tasks.map(task =>
            {
                  return (task.id === action.taskId) ? { ...task, isComplete:action.isComplete } : task;
                }))
        case SET_TASK_GROUP:
            return (tasks.map(task => {
                return (task.id === action.taskId) ? {...task,group:action.groupId} : task;
            }))
        case SET_TASK_NAME:
            console.log(action.groupId);
            
            console.log(`inside reducer ${action.name}`);
            
            return (tasks.map(task => {
    
                
                return (task.id === action.taskId) ? { ...task, name: action.name } : task;
            }))
            
    }

    return tasks;
} 