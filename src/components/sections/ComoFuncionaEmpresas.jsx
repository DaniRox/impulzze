import styles from "@/components/sections/ComoFuncionaEmpresas.module.css";
import Button from "../Button";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";


const ComoFuncionaEmpresas = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className={styles.ComoFuncionaEmpresas}>
            <h1 className={styles.ComoFuncionaEmpresas__title}>¿Como Funciona?</h1>

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

            <div className={styles.ComoFuncionaEmpresasContent}>
                <div className={styles.ComoFuncionaEmpresasContent__CardCircle1}>
                    <p className={styles.CardCircle__text}>Proporciona algunos detalles básicos sobre tu empresa y tus necesidades.</p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle2}>
                    <p className={styles.CardCircle__text}>Describe tus proyectos y especifica los requerimientos del freelancer ideal.</p>
                </div>

                <div className={styles.ComoFuncionaEmpresasContent__CardCircle3}>
                    <p className={styles.CardCircle__text}>Recibe propuestas de freelancers y selecciona al candidato que mejor se ajuste a tus expectativas.</p>
                </div>
            </div>

            <div className={styles.ComoFuncionaEmpresas__buton}>
                <Button
                    text="Comienza a impulzzar tu equipo"
                    backgroundColor="var(--esmerald)"
                    hoverColor="var(--maiz)"
                    onClick={() => scrollToSection("RegistraEmpresas")}
                />
            </div>

        </section>
    );
};

export default ComoFuncionaEmpresas;
