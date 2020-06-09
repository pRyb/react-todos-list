import React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux"
import { connect } from "react-redux";
import { IStore } from "../../store/todos/types"

const Wrapper = styled.section``;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;
  box-sizing: border-box;
  color: #f1f6fb;
  background-color: #4a69ff;

  &:disabled {
    cursor: auto;
    background-color: grey;
  }
`;

type IProps = {
  disableButton: boolean;
  fetchSingleTask: () => void;
}

const Footer = ({ fetchSingleTask, disableButton }: IProps): JSX.Element => {
  return (
    <Wrapper>
      <Button type="button" onClick={fetchSingleTask} disabled={disableButton}>
        <span>Add New Task</span>
      </Button>
    </Wrapper>
  );
};

const mapStateToProps = (state: IStore) => ({
  disableButton: state.newTaskButtonDisable,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchSingleTask: () => {
      dispatch({ type: "FETCH_SINGLE_TASK" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
