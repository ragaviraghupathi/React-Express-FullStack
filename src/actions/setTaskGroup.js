import { SET_TASK_GROUP } from './actionConstants';

export const setTaskGroup = (taskId,groupId) => {
    return {
        type: SET_TASK_GROUP,
        taskId,
        groupId
    }
}