import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const { children, title } = props;
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  border-radius: 0px 0px 20px 20px;
  background: #e1e1e1;
  padding: 20px 16px;
  gap: 20px;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: #141414;
  font-family: Hiragino Sans;
  font-size: 21.328px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 29.859px */
`;

const Content = styled.div`
  color: #141414;
  font-family: Hiragino Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 25.6px */
  margin-top: 8px;
`;
