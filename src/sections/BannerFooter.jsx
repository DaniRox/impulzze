import React from "react";
import styles from './BannerFooter.module.css';
import Logotipo1 from "../components/Logotipo1";


const BannerFooter = () => {
    return (
        <section className={styles.BannerFooter}>

            <h2 className={styles.BannerFooter__title}>La plataforma donde las empresas y freelancers crean éxito juntos.</h2>

            <div className={styles.BannerFooterContent}>
                <div className={styles.BannerFooterContent__shapes}>
                    <Logotipo1 color="var(--maiz)" width="6rem" height="auto"/>
                </div>

                <div className={styles.BannerFooterContent__text}>
                    <p className={styles.text}>
                        Impulzze es el ecosistema digital que conecta a empresas que buscan agilidad y talento con freelancers expertos listos para adaptarse a sus desafíos.<br></br><br></br>
                        Desde Recursos Humanos hasta Proyectos Especializados, transformamos conexiones en resultados.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default BannerFooter;
