import { combineReducers } from "redux";

import {
  todosReducer,
  taskNumberReducer,
  newTaskButtonReducer,
} from "./todos/reducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  nextTaskNumber: taskNumberReducer,
  newTaskButtonDisable: newTaskButtonReducer,
});

export default rootReducer;
