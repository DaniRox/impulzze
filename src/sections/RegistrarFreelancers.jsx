import React from 'react';
import styles from "./RegistrarFreelancers.module.css";


const RegistrarFreelancers = () => {
    return (
        <section className={styles.RegistrarFreelancers}>

            <div className={styles.RegistrarFreelancers__titles}>
                <h1 className={styles.RegistrarFreelancers__title}>Registra Tu Freelancers
                y Encuentra el Talento que Necesitas</h1>
                <h2 className={styles.RegistrarFreelancers__subtitle}>Completa la información a continuación para comenzar a publicar proyectos y recibir propuestas.</h2>
            </div>

            <form action="">
                <div className={styles.col1}>
                    <input type="text" placeholder="Nombre completo"className={styles.formInput} />
                    <input type="text" placeholder="Email"className={styles.formInput} />
                    <input type="text" placeholder="País de recidencia"className={styles.formInput} />
                    <input type="text" placeholder="Área de especialización"className={styles.formInput} />
                </div>
                <div className={styles.col2}>
                    <input type="text" placeholder="Nivel de experiencia"className={styles.formInput} />
                    <input type="text" placeholder="Idiomas"className={styles.formInput} />
                    <input type="text" placeholder="Portafolio/LinkedIn"className={styles.formInput} />
                    <input type="submit" className={styles.formSubmit} value="Unirme a Impulzze"/>
                </div>
            </form>

        </section>
    );
};

export default RegistrarFreelancers;
