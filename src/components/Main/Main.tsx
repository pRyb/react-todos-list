import React from "react";
import { connect } from "react-redux";
import TaskWrapper from "../TaskWrapper/TaskWrapper";
import Task from "../Task/Task";
import { IStore, ITask } from "../../store/todos/types"

type IProps = {
  todos?: ITask[];
}

const Main = ({ todos }: IProps) : JSX.Element => {
  const renderTodos = (): any => {
    return (
      todos &&
      todos.length > 0 &&
      todos.map(({ title, completed, id }: ITask, index) => {
        return (
          <Task
            key={index}
            title={title}
            completed={completed}
            id={id}
            index={index}
          />
        );
      })
    );
  };

  return <TaskWrapper render={renderTodos} />;
};

const mapStateToProps = (state: IStore) => ({ todos: state.todos });

export default connect(mapStateToProps, null)(Main);
