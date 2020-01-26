import { CREATE_TASK } from './actionConstants';
export const createTask = (userId, groupId, taskId) => {
    console.log("inside the create task fn");
    return {
        type: CREATE_TASK ,
        userId,
        groupId ,
        taskId
    }

} 