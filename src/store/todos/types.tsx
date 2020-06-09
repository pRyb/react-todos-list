export const TASK_RECEIVED = "TASK_RECEIVED";
export const CHANGE_TASK_STATUS_TO_DONE = "CHANGE_TASK_STATUS_TO_DONE";
export const REMOVE_TASK = "REMOVE_TASK";
export const SET_NEXT_TASK_NUMBER = "SET_NEXT_TASK_NUMBER";
export const DISABLE_NEW_TASK_BUTTON = "DISABLE_NEW_TASK_BUTTON";
export const ENABLE_NEW_TASK_BUTTON = "ENABLE_NEW_TASK_BUTTON";

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TaskReceivedAction {
  type: typeof TASK_RECEIVED;
  payload: ITask;
}

interface ChangeTaskStatusToDoneAction {
  type: typeof CHANGE_TASK_STATUS_TO_DONE;
  payload: ITask;
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: ITask;
}

interface SetNextTaskNumberAction {
  type: typeof SET_NEXT_TASK_NUMBER;
}

interface DisableNewTaskButtonAction {
  type: typeof DISABLE_NEW_TASK_BUTTON;
}

interface EnableNewTaskButtonAction {
  type: typeof ENABLE_NEW_TASK_BUTTON;
}

export type TodosActionTypes =
  | TaskReceivedAction
  | ChangeTaskStatusToDoneAction
  | RemoveTaskAction;

export type NextTaskNumberTypes = SetNextTaskNumberAction;

export type NewTaskButtonType =
  | DisableNewTaskButtonAction
  | EnableNewTaskButtonAction;

  export type IStore = {
    todos: ITask[];
    nextTaskNumber: number;
    newTaskButtonDisable: boolean;

  }