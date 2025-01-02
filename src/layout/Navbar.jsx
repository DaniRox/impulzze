import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Button from "../components/Button";
import Logotipo1 from "../components/Logotipo1";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className={styles.Navbar}>

            <div className={styles.NavbarContent__logotipo}>
                <Logotipo1 color="var(--esmerald)" width="2.2rem" height="auto" />
            </div>

            <div className={styles.NavbarContent__buttons}>

                <Button
                    text="Únete como Impulzzer"
                    backgroundColor="var(--clear)"
                    onClick={() => scrollToSection("ImpulzzeEmpresas")}
                />
                <Button
                    text="Encuentra talento"
                    backgroundColor="var(--clear)"
                    onClick={() => scrollToSection("ImpulzzeFreelancers")}
                />
            </div>

        </nav>
    );
};

export default Navbar;
