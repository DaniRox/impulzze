import React from 'react';
import styles from "./ComoFuncionaFreelancers.module.css";


const ComoFuncionaFreelancers = () => {
    return (
        <section className={styles.ComoFuncionaFreelancers}>
            <h1 className={styles.ComoFuncionaFreelancers__title}>¿Como Funciona?</h1>

            <div className={styles.ComoFuncionaFreelancersContent}>
                <div className={styles.ComoFuncionaFreelancersContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Dinos quién eres, qué sabes hacer y qué tipo de proyectos buscas.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Explora las oportunidades y postúlate a aquellas que se ajusten a tus intereses.</p>
                </div>

                <div className={styles.ComoFuncionaFreelancersContent__CardCircle}>
                    <p className={styles.CardCIrcle__text}>Recibe propuestas de freelancers y selecciona al candidato que mejor se ajuste a tus expectativas.</p>
                </div>
            </div>

        </section>
    );
};

export default ComoFuncionaFreelancers;
