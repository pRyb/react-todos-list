import { put, all, call, takeLatest, select } from "redux-saga/effects";
import * as selectors from "./selectors";
import {ITask} from "./store/todos/types"

function* fetchFirstTenTasks() {
  yield put({ type: "DISABLE_NEW_TASK_BUTTON" });
  yield all(
    [...Array(10).keys()].map((taskNumber) =>
      call(fetchTask, ++taskNumber)
    )
  );
  yield put({ type: "ENABLE_NEW_TASK_BUTTON" });
}

function* fetchSingleTask() {
  yield put({ type: "DISABLE_NEW_TASK_BUTTON" });
  const nextTaskNumber = yield select(selectors.nextTaskNumber);
  yield call(fetchTask, nextTaskNumber);
  yield put({ type: "ENABLE_NEW_TASK_BUTTON" });
}

function* fetchTask(taskNumber: number) {
  const url = `https://jsonplaceholder.typicode.com/todos/${taskNumber}`
  const result: ITask = yield fetch(url,  {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "Content-Type", 
    },
  }).then(res => res.json()).catch(err => console.log("err", err));
    
  if (result) {
    yield put({ type: "TASK_RECEIVED", payload: result });
    yield put({ type: "SET_NEXT_TASK_NUMBER" });
  }
    
}

export default function* rootSaga() {
  yield all([
    takeLatest("FETCH_FIRST_TEN_TASKS", fetchFirstTenTasks),
    takeLatest("FETCH_SINGLE_TASK", fetchSingleTask),
  ]);
}
