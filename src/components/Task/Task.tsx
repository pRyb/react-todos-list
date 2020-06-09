import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";

import { changeTaskStatusToDone, removeTask } from "../../store/todos/actions";

const Button = styled.button`
  display: block;
  height: 30px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;
  background-color: transparent;
  align-self: center;
`;

const Title = styled.span`
  text-align: justify;
  justify-self: start;

  > span:first-of-type {
    display: inline-block;
    width: 30px;
  }
`;

const CompleteButtonWrapper = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: #f6522e;
  color: #f6522e;

  &:disabled {
    cursor: auto;
    border-color: mediumseagreen;
    color: mediumseagreen;
  }
`;

const RemoveButtonWrapper = styled(Button)`
  border-color: #ff2970;
  color: #ff2970;
`;

const TaskWrapper = styled.section`
  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    row-gap: 10px;

    > span:first-child {
      display: block;
      width: 100%;
      grid-column: 1/3;
    }

    button[name="NOT"] {
      grid-column: 1/3;
    }
  }
  margin-bottom: 10px;
  display: inline-grid;
  grid-template-columns: auto 120px 40px;
  grid-auto-rows: min-content;
  column-gap: 10px;
  box-sizing: border-box;
  min-width: 300px;
`;

type IPropsCompletedButton = {
  type?: string,
  completed: boolean,
  handleCheckbox: () => void,
}

const CompletedButton = ({
  completed,
  handleCheckbox,
}: IPropsCompletedButton) => {
  return (
    <CompleteButtonWrapper
      disabled={completed}
      name={completed ? "DONE" : "NOT"}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleCheckbox();
      }}
    >
      {completed ? (
        <>
          <span>DONE</span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </>
      ) : (
        <>
          <span>NOT DONE</span>
          <FontAwesomeIcon icon={faTimesCircle} />
        </>
      )}
    </CompleteButtonWrapper>
  );
};

type IPropsRemoveButton = {
  handleRemoveButton: () => void,
}

const RemoveButton = ({
  handleRemoveButton,
}: IPropsRemoveButton) => {
  return (
    <RemoveButtonWrapper
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleRemoveButton();
      }}
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </RemoveButtonWrapper>
  );
};

type IPropsTask = {
  title: string;
  completed: boolean;
  id: number;
  changeTaskStatusToDone: (id: number) => void;
  removeTask:  (id: number) => void;
  index: number;
}

const Task = ({
  title,
  completed,
  id,
  changeTaskStatusToDone,
  removeTask,
  index,
}: IPropsTask) => {
  const handleCheckbox = () => changeTaskStatusToDone(id);
  const handleRemoveButton = () => removeTask(id);
  return (
    <TaskWrapper>
      <Title>
        <span>{++index}.</span>
        <span>{title}</span>
      </Title>
      <CompletedButton
        type="button"
        completed={completed}
        handleCheckbox={handleCheckbox}
      />

      {completed && <RemoveButton handleRemoveButton={handleRemoveButton} />}
    </TaskWrapper>
  );
};

const mapDispatchToProps = { changeTaskStatusToDone, removeTask };

export default connect(null, mapDispatchToProps)(Task);
