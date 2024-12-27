import React from 'react';
import styles from "./ImpulzzeEmpresas.module.css";
import CardEmpresas from "../components/CardEmpresas";
import { Talento, Agilidad, Recursos } from "../components/Icons";


const ImpulzzeEmpresas = () => {
    return (
        <section className={styles.ImpulzzeEmpresas} id="ImpulzzeEmpresas">
            <h1 className={styles.ImpulzzeEmpresas__title}>¿Por qué elegir Impulzze para
            tu empresa?</h1>

            <div className={styles.ImpulzzeEmpresasContent}>

                <CardEmpresas
                    Icon={Talento}
                    title="Acceso a talento especializado"
                    text="Encuentra freelancers con experiencia y adaptabilidad para cada proyecto, listos para impulsar tus objetivos con agilidad."
                />

                <CardEmpresas
                    Icon={Agilidad}
                    title="Agilidad en cada paso"
                    text="Gestiona y escala tu talento con flexibilidad. Cada freelance en nuestra plataforma se adapta a las demandas del mercado moderno."
                />

                <CardEmpresas
                    Icon={Recursos}
                    title="Optimización de recursos"
                    text="Reduce costos, mejora la eficiencia y obtén el talento que necesitas sin compromiso a largo plazo."
                />
            </div>
        </section>
    );
};

export default ImpulzzeEmpresas;
