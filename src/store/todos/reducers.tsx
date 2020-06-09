import {
  ITask,
  TodosActionTypes,
  NextTaskNumberTypes,
  NewTaskButtonType,
  TASK_RECEIVED,
  CHANGE_TASK_STATUS_TO_DONE,
  REMOVE_TASK,
  SET_NEXT_TASK_NUMBER,
  DISABLE_NEW_TASK_BUTTON,
  ENABLE_NEW_TASK_BUTTON,
} from "./types";

const initialState: ITask[] = [];

export const todosReducer = (
  state = initialState,
  action: TodosActionTypes | any
) => {
  let newState = [...state];
  switch (action.type) {
    case TASK_RECEIVED:
      return [...state, action.payload];
    case CHANGE_TASK_STATUS_TO_DONE:
      const taskIndex = state.findIndex((task) => task.id === action.payload);
      if (taskIndex === -1) return state;
      newState[taskIndex].completed = true;
      return newState;
    case REMOVE_TASK:
      const removingTaskIndex = state.findIndex(
        (task) => task.id === action.payload
      );
      if (removingTaskIndex === -1) return state;
      newState.splice(removingTaskIndex, 1);
      return newState;
    default:
      return state;
  }
};

export const taskNumberReducer = (state = 1, action: NextTaskNumberTypes) => {
  switch (action.type) {
    case SET_NEXT_TASK_NUMBER:
      return ++state;
    default:
      return state;
  }
};

export const newTaskButtonReducer = (
  state = false,
  action: NewTaskButtonType
) => {
  switch (action.type) {
    case DISABLE_NEW_TASK_BUTTON:
      return (state = true);
    case ENABLE_NEW_TASK_BUTTON:
      return (state = false);
    default:
      return state;
  }
};
