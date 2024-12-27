import React from 'react';
import styles from "./ComoFuncionaEmpresas.module.css";
import Button from "../components/Button";


const ComoFuncionaEmpresas = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={styles.ComoFuncionaEmpresas}>
            <h1 className={styles.ComoFuncionaEmpresas__title}>¿Como Funciona?</h1>

            <div className={styles.ComoFuncionaEmpresasContent}>
                <div className={styles.ComoFuncionaEmpresasContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Proporciona algunos detalles básicos sobre tu empresa y tus necesidades.</p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Describe tus proyectos y especifica los requerimientos del freelancer ideal.</p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Recibe propuestas de freelancers y selecciona al candidato que mejor se ajuste a tus expectativas.</p>
                </div>
            </div>

            <div className={styles.ComoFuncionaEmpresas__buton}>
                <Button
                    text="Comienza a impulzzar tu equipo"
                    backgroundColor="var(--esmerald)"
                    onClick={() => scrollToSection("RegistraEmpresas")}
                />
            </div>

        </section>
    );
};

export default ComoFuncionaEmpresas;
