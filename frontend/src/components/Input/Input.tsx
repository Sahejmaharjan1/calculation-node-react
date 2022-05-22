import React, { FC } from "react";
import styles from "./Input.module.css";

interface InputProps {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  radius?: string;
  width?: string;
  placeholder?: string;
  showOutline?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number | null;
}

const Input: FC<InputProps> = ({
  border,
  color,
  height = "36px",
  radius = "2px",
  width = "230px",
  placeholder,
  showOutline = false,
  onChange,
  value,
}) => {
  return (
    <input
      type='number'
      className={`${styles.input} ${showOutline ? styles.showOutline : ""}`}
      placeholder={placeholder}
      value={value ? value : undefined}
      onChange={onChange}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    />
  );
};

export default Input;
