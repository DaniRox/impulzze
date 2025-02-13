import styles from "@/components/sections/ImpulzzeFreelancers.module.css";
import CardFreelancers from "../CardFreelancers";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";
import { Oportunidades, Crecimiento, Seguridad  } from "../Icons";


const ImpulzzeFreelancers = () => {
    return (
        <section className={styles.ImpulzzeFreelancers} id="ImpulzzeFreelancers">
            <h1 className={styles.ImpulzzeFreelancers__title}>Unete a Impulzze y se parte de una comunidad Global de Freelancers</h1>


            <ArrowLeft
                size={80}
                color="var(--esmerald)"
                className={styles.arrowLeft}
            />

            <ArrowRight
                size={80}
                color="var(--esmerald)"
                className={styles.arrowRight}
            />

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
