import React from "react";
import styles from "./Button.module.css";

const Button = ({ text = "Click me", backgroundColor = "#007BFF", hoverColor = "#0056b3", onClick = () => {} }) => {
    return (
        <button
        className={styles.button}
        style={{
            "--background-color": backgroundColor,
            "--hover-color": hoverColor, }}
        onClick={onClick}
        >
        {text}
        </button>
    );
};

export default Button;
