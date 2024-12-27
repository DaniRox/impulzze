import React from 'react';
import styles from "./CompromisoImpulzze.module.css";
import Shape from "../components/Shape";


const CompromisoImpulzze = () => {
    return (
        <section className={styles.CompromisoImpulzze} id="CompromisoImpulzze">
            <div className={styles.CompromisoImpulzze__titles}>
            <h2 className={styles.CompromisoImpulzze__subtitle}>Nuestro compromiso con el Éxito</h2>
                <h1 className={styles.CompromisoImpulzze__title}>Impulzze: Donde el talento conecta y las oportunidades crecen.</h1>
            </div>

            <div className={styles.CompromisoImpulzzeContent}>
                <div className={styles.CompromisoImpulzzeContent__shapes}>
                    <div className={styles.shapes}>
                        <Shape width={129} height={64} fill="var(--maiz)" className={styles.shape1}/>
                        <Shape rotation={180} width={129} height={64} fill="var(--esmerald)" className={styles.shape2}/>
                    </div>
                    <Shape rotation={270} width={129} height={64} fill="var(--purple)" className={styles.shape3}/>
                </div>
                <div className={styles.CompromisoImpulzzeContent__text}>
                    <p className={styles.text}>
                    Nuestro compromiso es conectar freelancers de calidad con empresas que valoran el talento y buscan resultados excepcionales. Creemos en el crecimiento compartido y la innovación constante.<br></br><br></br>
                    En Impulzze, cada conexión es una oportunidad de éxito.
                    </p>
                </div>

            </div>
        <div className={styles.CompromisoImpulzzeContent__spans}>
                    <span className={styles.span1}>Trabajamos contigo y para ti.</span>
                    <span className={styles.span2}>Apasionados por impulzzar empresas y personas hacia el éxito.</span>
                </div>
        </section>
    );
};

export default CompromisoImpulzze;
