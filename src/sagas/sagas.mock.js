import { put, take, select } from "redux-saga/effects";
import { createTask } from "../actions/createTask";
import { REQUEST_TASK_CREATION } from "../actions/actionConstants";

import uuid from 'uuid';

export function* taskCreationSaga() {
    while (true) {
        console.log("running task creation saga");
        const { groupId } = yield take(REQUEST_TASK_CREATION);
        console.log("groupId" + groupId);
        const userId = "U1";
        const taskId = uuid();
        yield put(createTask(userId, groupId, taskId));
        console.log("got groupID", groupId);
    }
}
