import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.section`
  background: #FBE7B5;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #2F3538;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Todos List</Title>
    </HeaderWrapper>
  );
};

export default Header;
