import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logotipo1 from "../components/Logotipo1";
import Button from "../components/Button";

const spans = [
    "oportunidades globales",
    "proyectos innovadores",
    "equipos de alto nivel",
    "empresas internacionales"
];

const Header = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        const currentPhrase = spans[currentIndex];
        if (letterIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, letterIndex + 1)); // Extraemos hasta la letra actual
            setLetterIndex(letterIndex + 1);
        }, 150); // Controla la velocidad de la máquina de escribir
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setLetterIndex(0);
            setCurrentText("");
            setCurrentIndex((prev) => (prev + 1) % spans.length);
        }, 2000); // Tiempo entre frases
        return () => clearTimeout(timeout);
        }
    }, [letterIndex, currentIndex]);

    return (
        <header className={styles.Header}>
        <div className={styles.HeaderContent}>
            <div className={styles.HeaderContent__text}>
                <h1>
                    Impulzza tu empresa,<br />
                    Conecta con<br />
                    <span className={styles.animatedText}>
                    {currentText.split("").map((char, index) => (
                        <span
                        key={index}
                        className={styles.letter}
                        style={{
                            animationDelay: `${index * 0.1}s` // Controla el tiempo de animación de cada letra
                        }}
                        >
                        {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                    </span>
                </h1>
                <div className={styles.HeaderContent__buttons}>
                    <Button
                        text="Explora servicios y potencia tu proyecto"
                        backgroundColor="var(--maiz)"
                        hoverColor="var(--esmerald)"
                        onClick={() => scrollToSection("ImpulzzeEmpresas")}
                    />
                    <Button
                        text="Contáctanos y creemos soluciones"
                        backgroundColor="var(--salmon)"
                        hoverColor="var(--esmerald)"
                        onClick={() => scrollToSection("ImpulzzeFreelancers")}
                    />
                </div>
            </div>

            <div className={styles.HeaderContent__Logotipo}>
                <div className={styles.logotipo}>
                    <Logotipo1 color="var(--clear)" width="7rem" height="auto" />
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header;
