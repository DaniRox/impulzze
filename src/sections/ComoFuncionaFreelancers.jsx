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
                    <p className={styles.CardCircle__text}>Dinos quién eres, qué sabes hacer y qué tipo de proyectos buscas.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle2}>
                    <p className={styles.CardCircle__text}>Explora las oportunidades y postúlate a aquellas que se ajusten a tus intereses.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle3}>
                    <p className={styles.CardCircle__text}>Disfruta de una experiencia de trabajo efectiva con el respaldo y la seguridad que ofrece Impulzze.</p>
                </div>
            </div>

            <div className={styles.ComoFuncionaFreelancers__buton}>
                <Button
                    text="Se parte de Impulzze"
                    backgroundColor="var(--salmon)"
                    hoverColor="var(--esmerald)"
                    onClick={() => scrollToSection("RegistraFreelancers")}
                />
            </div>

        </section>
    );
};

export default ComoFuncionaFreelancers;
