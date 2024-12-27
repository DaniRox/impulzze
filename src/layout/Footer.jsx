import React from "react";
import styles from "./Footer.module.css";
import Logotipo2 from "../components/Logotipo2";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContent}>

                <div className={styles.FooterContent__logotipo}>
                    <Logotipo2 color="var(--purple)" width="8rem" height="auto"/>
                    <span>Conectando talento global<br></br>con soluciones innovadoras</span>
                </div>

                <div className={styles.FooterContent__links}>
                    <div className={styles.links__internalLinks}>
                        <a href="#SobreImpulzze" target="_blank" rel="noopener noreferrer" className={styles.link}>Sobre Impulzze</a>
                        <a href="ImpulzzeEmpresas" target="_blank" rel="noopener noreferrer" className={styles.link}>Impulzze para Empresas</a>
                        <a href="CompromisoImpulzze" target="_blank" rel="noopener noreferrer" className={styles.link}>Compromiso Impulzze</a>
                        <a href="" target="_blank" rel="noopener noreferrer" className={styles.link}>Impulzze para Freelancers</a>
                    </div>
                    <div className={styles.links__socialLinks}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
                        <a href="https://" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                        <a href="https://" target="_blank" rel="noopener noreferrer" className={styles.link}>Mail</a>
                        <a href="https://" target="_blank" rel="noopener noreferrer" className={styles.link}>WhatsApp</a>
                    </div>
                </div>



            </div>

            <div className={styles.FooterContent__termsYmention}>
                    <p><a href="">Terminos y Condiciones</a></p>
                    <p><a href="">Diseño y Desarrollo por DaniRox</a></p>
            </div>
        </footer>
    );
};

export default Footer;
