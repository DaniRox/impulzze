import React from "react";
import styles from "@/components/sections/Footer.module.css";
import Logotipo2 from "../Logotipo2";

const Footer = () => {
    // Función de desplazamiento suave
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterContent__logotipo}>
                    <Logotipo2 color="var(--esmerald)" width="8rem" height="auto" />
                    <span>Conectando talento global<br />con soluciones innovadoras</span>
                </div>

                <div className={styles.FooterContent__links}>
                    <div className={styles.links__internalLinks}>
                        <a
                            href="#SobreImpulzze"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("SobreImpulzze");
                            }}
                            className={styles.link}
                        >
                            Sobre Impulzze
                        </a>
                        <a
                            href="#ImpulzzeEmpresas"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("ImpulzzeEmpresas");
                            }}
                            className={styles.link}
                        >
                            Impulzze para Empresas
                        </a>
                        <a
                            href="#CompromisoImpulzze"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("CompromisoImpulzze");
                            }}
                            className={styles.link}
                        >
                            Compromiso Impulzze
                        </a>
                        <a
                            href="#ImpulzzeFreelancers"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("ImpulzzeFreelancers");
                            }}
                            className={styles.link}
                        >
                            Impulzze para Freelancers
                        </a>
                        <a
                            href="#CasosDeExito"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("CasosDeExito");
                            }}
                            className={styles.link}
                        >
                            Casos de Éxito
                        </a>
                    </div>
                    <div className={styles.links__socialLinks}>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Instagram
                        </a>
                        <a
                            href="https://"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            Mail
                        </a>
                        <a
                            href="https://"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.FooterContent__termsYmention}>
                <p>
                    <a href="">Términos y Condiciones</a>
                </p>
                <p>
                    <a href="">Diseño y Desarrollo por DaniRox</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

