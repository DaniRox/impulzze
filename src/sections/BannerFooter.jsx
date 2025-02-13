import styles from './BannerFooter.module.css';
import Logotipo1 from "../components/Logotipo1";


const BannerFooter = () => {
    return (
        <section className={styles.BannerFooter}>

            <h2 className={styles.BannerFooter__title}>Transforma tu visión con el talento correcto. Conecta y crea éxito.</h2>

            <div className={styles.BannerFooterContent}>
                <div className={styles.BannerFooterContent__shapes}>
                    <Logotipo1 color="var(--purple)" width="5.2rem" height="auto"/>
                </div>

                <div className={styles.BannerFooterContent__text}>
                    <p className={styles.text}>
                    Sea que necesites talento para tu empresa o quieras llevar tu carrera al siguiente nivel, en Impulzze tienes el punto de partida.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default BannerFooter;
