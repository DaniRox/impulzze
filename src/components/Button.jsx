import React from "react";
import styles from "./Button.module.css";

const Button = ({ text = "Click me", backgroundColor = "#007BFF", onClick = () => {} }) => {
    return (
        <button
        className={styles.button}
        style={{ backgroundColor }}
        onClick={onClick}
        >
        {text}
        </button>
    );
};

export default Button;
