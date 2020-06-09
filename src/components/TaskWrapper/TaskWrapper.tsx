import React from "react";
import styled from "styled-components";


type IProps = {
  render: () => JSX.Element;
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: auto;
  margin: 0 10px;
`;

const TaskWrapper = (props: IProps): JSX.Element => {
  return <Wrapper>{props.render()}</Wrapper>;
};

export default TaskWrapper;
