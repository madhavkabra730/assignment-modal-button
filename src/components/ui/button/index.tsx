import * as React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "primary" | "sm" | "lg" | "icon";
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "primary", icon, ...props }, ref) => {
    const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className || ""}`;

    return (
      <button className={buttonClass} ref={ref} {...props}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };