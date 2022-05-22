import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

const Button: FC<ButtonProps> = ({
  border,
  color,
  children,
  onClick,
  height = "36px",
  radius = "2px",
  width = "250px",
}) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      type='submit'
    >
      {children}
    </button>
  );
};

export default Button;
