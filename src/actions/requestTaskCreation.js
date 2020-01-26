import {REQUEST_TASK_CREATION } from './actionConstants';
export const requestTaskCreation = (groupId) => {
    console.log("inside action" );
    return {
            type: REQUEST_TASK_CREATION,
        groupId
    }
}