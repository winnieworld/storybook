import React from "react";
import styled from "styled-components";

function Menu(props) {
  const { children, type, selected = false } = props;
  return (
    <MenuItem type={type} selected={selected}>
      {children}
      {type !== "title" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1717 12.0007L8.22168 7.05072L9.63568 5.63672L15.9997 12.0007L9.63568 18.3647L8.22168 16.9507L13.1717 12.0007Z"
            fill={selected ? "rgba(17, 112, 255, 1)" : "#141414"}
          />
        </svg>
      )}
    </MenuItem>
  );
}

const MenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  color: ${(props) =>
    props.type === "title"
      ? "#8E8E8E"
      : props.selected
      ? "rgba(17, 112, 255, 1)"
      : "#141414"};
  font-family: Hiragino Sans;
  font-size: ${(props) => (props.type === "title" ? "16px" : "14px")};
  font-style: normal;
  font-weight: ${(props) => (props.type === "title" ? "700" : "600")};
  line-height: ${(props) => (props.type === "title" ? "140%" : "nomal")};
  padding: ${(props) => (props.type === "title" ? "0" : "8px")};
`;

export default Menu;
