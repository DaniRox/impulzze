import React from 'react';
import styles from "./ComoFuncionaFreelancers.module.css";
import Button from "../components/Button";


const ComoFuncionaFreelancers = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={styles.ComoFuncionaFreelancers}>
            <h1 className={styles.ComoFuncionaFreelancers__title}>¿Como Funciona?</h1>

            <div className={styles.ComoFuncionaFreelancersContent}>
                <div className={styles.ComoFuncionaFreelancersContent__CardCircle1}>
                    <p className={styles.CardCIrcle__text}>Dinos quién eres, qué sabes hacer y qué tipo de proyectos buscas.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle2}>
                    <p className={styles.CardCIrcle__text}>Explora las oportunidades y postúlate a aquellas que se ajusten a tus intereses.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle3}>
                    <p className={styles.CardCIrcle__text}>Recibe propuestas de freelancers y selecciona al candidato que mejor se ajuste a tus expectativas.</p>
                </div>
            </div>

            <div className={styles.ComoFuncionaFreelancers__buton}>
                <Button
                    text="Se parte de Impulzze"
                    backgroundColor="var(--salmon)"
                    onClick={() => scrollToSection("RegistraFreelancers")}
                />
            </div>

        </section>
    );
};

export default ComoFuncionaFreelancers;
