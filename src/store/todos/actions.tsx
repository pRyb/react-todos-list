import {
  ITask,
  TASK_RECEIVED,
  CHANGE_TASK_STATUS_TO_DONE,
  SET_NEXT_TASK_NUMBER,
  DISABLE_NEW_TASK_BUTTON,
  ENABLE_NEW_TASK_BUTTON,
  REMOVE_TASK,
  TodosActionTypes,
} from "./types";

export function fetchTask(task: ITask): TodosActionTypes {
  return {
    type: TASK_RECEIVED,
    payload: task,
  };
}

export function setNextTaskNumber() {
  return {
    type: SET_NEXT_TASK_NUMBER,
  };
}

export function changeTaskStatusToDone(taskId: number) {
  return {
    type: CHANGE_TASK_STATUS_TO_DONE,
    payload: taskId,
  };
}

export function removeTask(taskId: number) {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
}

export function disableNewTaskButton() {
  return {
    type: DISABLE_NEW_TASK_BUTTON,
  };
}

export function enableNewTaskButton() {
  return {
    type: ENABLE_NEW_TASK_BUTTON,
  };
}
