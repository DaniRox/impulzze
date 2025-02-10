import React from 'react';
import styles from "@/components/sections/RegistrarEmpresa.module.css";


const RegistrarEmpresa = () => {
    return (
        <section className={styles.RegistrarEmpresa}>

            <div className={styles.RegistrarEmpresa__titles} id="RegistraEmpresas">
                <h1 className={styles.RegistrarEmpresa__title}>Registra Tu Empresa
                y Encuentra el Talento que Necesitas</h1>
                <h2 className={styles.RegistrarEmpresa__subtitle}>Completa la información a continuación para comenzar a publicar proyectos y recibir propuestas.</h2>
            </div>

            <form action="" className={styles.form}>
                <div className={styles.col1}>
                    <input type="text" placeholder="Nombre de la empresa"className={styles.formInput} />
                    <input type="text" placeholder="Nombre de contacto"className={styles.formInput} />
                    <input type="text" placeholder="Email corporativo"className={styles.formInput} />
                    <input type="text" placeholder="País"className={styles.formInput} />
                </div>
                <div className={styles.col2}>
                    <input type="text" placeholder="Industria"className={styles.formInput} />
                    <input type="text" placeholder="Talento buscado"className={styles.formInput} />
                    <input type="text" placeholder="Nombre"className={styles.formInput} />
                    <input type="submit" className={styles.formSubmit} value="Registrar mi empresa"/>
                </div>
            </form>

        </section>
    );
};

export default RegistrarEmpresa;
