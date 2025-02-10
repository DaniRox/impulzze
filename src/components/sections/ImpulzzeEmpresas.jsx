import React from 'react';
import styles from "@/components/sections/ImpulzzeEmpresas.module.css";
import CardEmpresas from "../CardEmpresas";
import { Talento, Agilidad, Recursos } from "../Icons";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";


const ImpulzzeEmpresas = () => {
    return (
        <section className={styles.ImpulzzeEmpresas} id="ImpulzzeEmpresas">
            <h1 className={styles.ImpulzzeEmpresas__title}>Encuentra talento Global para tu Empresa</h1>


            <ArrowLeft
                size={80}
                color="var(--salmon)"
                className={styles.arrowLeft}
            />

            <ArrowRight
                size={80}
                color="var(--salmon)"
                className={styles.arrowRight}
            />

            <div className={styles.ImpulzzeEmpresasContent}>

                <CardEmpresas
                    Icon={Talento}
                    title="Acceso a talento especializado"
                    text={
                        <>
                        Encuentra <span className={styles.highlighted}>freelancers</span> con <span className={styles.highlighted}>experiencia</span> y <span className={styles.highlighted}>adaptabilidad</span> para cada proyecto, listos para <span className={styles.highlighted}>impulzzar</span> tus objetivos con <span className={styles.highlighted}>agilidad</span>.
                        </>
                    }
                />

                <CardEmpresas
                    Icon={Agilidad}
                    title="Agilidad en cada paso"
                    text={
                        <>
                        Gestiona y escala tu <span className={styles.highlighted}>talento</span> con <span className={styles.highlighted}>flexibilidad</span>. Cada <span className={styles.highlighted}>freelance</span> en nuestra plataforma se adapta a las demandas del mercado moderno.
                        </>
                    }
                />

                <CardEmpresas
                    Icon={Recursos}
                    title="Optimización de recursos"
                    text={
                        <>
                        Reduce costos, mejora la <span className={styles.highlighted}>eficiencia</span> y obtén el <span className={styles.highlighted}>talento</span> que necesitas sin <span className={styles.highlighted}>compromiso</span> a largo plazo.
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default ImpulzzeEmpresas;
