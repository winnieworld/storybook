import React from "react";
import styled from "styled-components";

function Button(props) {
  const { children, label } = props;
  return <BlueButton>{label}</BlueButton>;
}

const BlueButton = styled.button`
  border-radius: 20px;
  background: rgba(112, 169, 255, 1);
  display: inline-flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 4px;
  box-shadow: none;
  color: #fff;
  font-family: Hiragino Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
  border: none;
  &:hover {
    background: rgba(65, 141, 255, 1);
  }
`;

export default Button;
