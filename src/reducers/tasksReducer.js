import { defaultState } from '../../server/defaultState';
import { CREATE_TASK } from '../actions/actionConstants';


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
            }
            ]
    }
    return tasks;
} 