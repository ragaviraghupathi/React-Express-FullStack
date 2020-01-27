import { SET_TASK_COMPLETE } from './actionConstants';

export const setTaskComplete = (taskId,isComplete) => {
    return {
        type: SET_TASK_COMPLETE,
        taskId,
        isComplete
    }
}