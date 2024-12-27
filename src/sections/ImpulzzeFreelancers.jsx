import React from 'react';
import styles from "./ImpulzzeFreelancers.module.css";
import CardFreelancers from "../components/CardFreelancers";
import { Oportunidades, Crecimiento, Seguridad } from "../components/Icons";


const ImpulzzeFreelancers = () => {
    return (
        <section className={styles.ImpulzzeFreelancers} id="ImpulzzeFreelancers">
            <h1 className={styles.ImpulzzeFreelancers__title}>¿Por qué elegir Impulzze para
            tu empresa?</h1>

            <div className={styles.ImpulzzeFreelancersContent}>

                <CardFreelancers
                    Icon={Oportunidades}
                    title="Acceso a Oportunidades Globales"
                    text="Trabaja con empresas innovadoras y amplía tu experiencia profesional."
                />

                <CardFreelancers
                    Icon={Crecimiento}
                    title="Crecimiento Profesional Continuo"
                    text="Impulzze te ofrece una red de apoyo para mejorar tus habilidades y avanzar en tu carrera."
                />

                <CardFreelancers
                    Icon={Seguridad}
                    title="Seguridad y Confianza"
                    text="Impulzze asegura transacciones confiables y un ambiente seguro para cada proyecto."
                />
            </div>
        </section>
    );
};

export default ImpulzzeFreelancers;
