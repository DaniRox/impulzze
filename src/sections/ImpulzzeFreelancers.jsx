import React from 'react';
import styles from "./ImpulzzeFreelancers.module.css";
import CardFreelancers from "../components/CardFreelancers";
import { Oportunidades, Crecimiento, Seguridad } from "../components/Icons";


const ImpulzzeFreelancers = () => {
    return (
        <section className={styles.ImpulzzeFreelancers} id="ImpulzzeFreelancers">
            <h1 className={styles.ImpulzzeFreelancers__title}>Impulzzers Globales:
            Ventajas de unirte a Impulzze</h1>

            <div className={styles.ImpulzzeFreelancersContent}>

                <CardFreelancers
                    Icon={Oportunidades}
                    title="Acceso a Oportunidades Globales"
                    text={
                        <>
                        Trabaja con empresas <span className={styles.highlighted}>innovadoras</span> y amplía tu <span className={styles.highlighted}>experiencia profesional</span>.
                        </>
                    }
                />

                <CardFreelancers
                    Icon={Crecimiento}
                    title="Crecimiento Profesional Continuo"
                    text={
                        <>
                        <span className={styles.highlighted}>Impulzze</span> te ofrece una red de apoyo para mejorar tus <span className={styles.highlighted}>habilidades</span> y <span className={styles.highlighted}>avanzar</span> en tu carrera.
                        </>
                    }
                />

                <CardFreelancers
                    Icon={Seguridad}
                    title="Seguridad y Confianza"
                    text={
                        <>
                        <span className={styles.highlighted}>Impulzze</span> asegura transacciones <span className={styles.highlighted}>confiables</span> y un ambiente <span className={styles.highlighted}>seguro</span> para cada proyecto.
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default ImpulzzeFreelancers;
