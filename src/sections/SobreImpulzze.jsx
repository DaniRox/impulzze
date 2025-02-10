import React from "react";
import styles from './SobreImpulzze.module.css';
import Circle from "../components/Circle";
import HalfCircle from "../components/HalfCircle";
import Logotipo1 from "../components/Logotipo1";


const SobreImpulzze = () => {
    return (
        <section className={styles.SobreImpulzze} id="SobreImpulzze">

            <h2 className={styles.SobreImpulzzeContent__title}>La plataforma donde las <span className={styles.highlighted}>empresas</span> y <span className={styles.highlighted}>freelancers</span> crean éxito juntos.</h2>

            <div className={styles.SobreImpulzzeContent}>
                <div className={styles.SobreImpulzzeContent__text}>
                    <p className={styles.text}>
                        <span className={styles.textItalic}>Impulzze</span> es el ecosistema digital que <span className={styles.textItalic}>conecta</span> a empresas que buscan <span className={styles.textItalic}>agilidad</span> y <span className={styles.textItalic}>talento</span> con freelancers expertos listos para adaptarse a sus desafíos.<br></br><br></br>
                        Desde Recursos Humanos hasta Proyectos Especializados, transformamos <span className={styles.textItalic}>conexiones</span> en <span className={styles.textItalic}>resultados</span>.
                    </p>
                </div>

                <div className={styles.SobreImpulzzeContent__shapes}>
                    <div className={styles.shapes}>
                        <Circle size={100} color="var(--esmerald)"/>
                        <HalfCircle width={50} height={100} color="var(--purple)" />
                    </div>
                    <div className={styles.logotipo}>
                        <Logotipo1 color="var(--clear)" width="4rem" height="auto"/>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default SobreImpulzze;
