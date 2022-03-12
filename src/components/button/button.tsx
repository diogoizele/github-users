import { css } from "@emotion/css";
import React, { CSSProperties, FC } from "react";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  type?: "submit" | "button";
}

const Button: FC<ButtonProps> = ({ onClick, children, style, type }) => {
  return (
    <button type={type} style={style} className={button} onClick={onClick}>
      {children}
    </button>
  );
};

const button = css`
  padding: 0.5rem 1rem;

  border: 2px solid #414141;

  border-radius: 5px;

  background-color: #414141;
  color: #f1f1f1;

  cursor: pointer;

  &:hover {
    background-color: #515151;
    border-color: #515151;
  }
`;

export default Button;
