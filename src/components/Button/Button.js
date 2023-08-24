import React from "react";
import styled from "styled-components";

function Button(props) {
  const {
    children,
    label,
    Icon = false,
    onClick,
    Size = "Nomal",
    Disabled = false,
    BgColor = "blue1",
    ...args
  } = props;
  //Size = Small || Nomal || Medium || Big

  return (
    <BlueButton
      onClick={onClick}
      size={Size}
      disabled={Disabled}
      bgColor={BgColor}
    >
      {Icon === "copy" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66653 3.99992V1.99992C4.66653 1.63173 4.96501 1.33325 5.3332 1.33325H13.3332C13.7014 1.33325 13.9999 1.63173 13.9999 1.99992V11.3333C13.9999 11.7015 13.7014 11.9999 13.3332 11.9999H11.3332V13.9993C11.3332 14.3679 11.0333 14.6666 10.662 14.6666H2.67111C2.30039 14.6666 2 14.3702 2 13.9993L2.00173 4.66717C2.0018 4.29866 2.30176 3.99992 2.67295 3.99992H4.66653ZM3.33495 5.33325L3.33346 13.3333H9.99987V5.33325H3.33495ZM5.99987 3.99992H11.3332V10.6666H12.6665V2.66659H5.99987V3.99992Z"
            fill="white"
          />
        </svg>
      )}
      {Icon === "leftArrow" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.21885 8.00047L10.5187 11.3003L9.57592 12.2431L5.33325 8.00047L9.57592 3.75781L10.5187 4.70062L7.21885 8.00047Z"
            fill="white"
          />
        </svg>
      )}

      {label}
      {Icon === "rightArrow" && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78101 8.00047L5.4812 4.70062L6.42401 3.75781L10.6667 8.00047L6.42401 12.2431L5.4812 11.3003L8.78101 8.00047Z"
            fill="white"
          />
        </svg>
      )}
    </BlueButton>
  );
}
const Colors = {
  blue1: "rgba(17, 112, 255, 1)",
  blue2: "rgba(112, 169, 255, 1)",
  gray: "rgba(171, 171, 171, 1)",
  white: "rgba(255, 255, 255, 1)",
};

const BlueButton = styled.button`
  width: ${(props) =>
    props.size === "Medium"
      ? "200px"
      : props.size === "Big"
      ? "300px"
      : "fit-content"};
  border-radius: 20px;
  background: ${(props) =>
    props.disabled ? "rgba(207, 226, 255, 1)" : Colors[props.bgColor]};
  box-sizing: border-box;
  display: inline-flex;
  padding: ${(props) => (props.size === "Small" ? "4px 16px" : "9.5px 25px")};
  align-items: center;
  gap: 4px;
  box-shadow: none;
  color: ${(props) =>
    props.bgColor === "white" ? "rgba(65, 141, 255, 1)" : "#fff"};
  font-family: Hiragino Sans;
  font-size: ${(props) => (props.size === "Small" ? "12px" : "14px")};
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
  text-align: center;
  justify-content: center;
  border: ${(props) =>
    props.bgColor === "white" ? "1px solid rgba(65, 141, 255, 1)" : "none"};
  &:hover {
    background: rgba(65, 141, 255, 1);
  }
`;

export default Button;
