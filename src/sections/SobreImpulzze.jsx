import React from "react";
import styles from './SobreImpulzze.module.css';
import Circle from "../components/Circle";
import HalfCircle from "../components/HalfCircle";
import Logotipo1 from "../components/Logotipo1";


const SobreImpulzze = () => {
    return (
        <section className={styles.SobreImpulzze} id="SobreImpulzze">

            <h2 className={styles.SobreImpulzzeContent__title}>La plataforma donde las empresas y freelancers crean éxito juntos.</h2>

            <div className={styles.SobreImpulzzeContent}>
                <div className={styles.SobreImpulzzeContent__text}>
                    <p className={styles.text}>
                        Impulzze es el ecosistema digital que conecta a empresas que buscan agilidad y talento con freelancers expertos listos para adaptarse a sus desafíos.<br></br><br></br>
                        Desde Recursos Humanos hasta Proyectos Especializados, transformamos conexiones en resultados.
                    </p>
                </div>

                <div className={styles.SobreImpulzzeContent__shapes}>
                    <div className={styles.shapes}>
                        <Circle size={100} color="var(--esmerald)"/>
                        <HalfCircle width={50} height={100} color="var(--purple)" />
                    </div>
                    <Logotipo1 color="var(--maiz)" width="3.5rem" height="auto"/>
                </div>
            </div>

        </section>
    );
};

export default SobreImpulzze;
