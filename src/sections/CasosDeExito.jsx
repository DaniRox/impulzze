import React from 'react';
import styles from "./CasosDeExito.module.css";
import CardComentario from "../components/CardComentario";
import Foto1 from "../assets/images/client1.jpg";
import Foto2 from "../assets/images/client2.jpg";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "../components/ArrowRight";


const CasosDeExito = () => {
    return (
        <section className={styles.CasosDeExito} id="CasosDeExito">
            <h1 className={styles.CasosDeExito__title}>A quienes Impulzzamos dicen...</h1>

            <ArrowLeft
                size={80}
                color="var(--maiz)"
                className={styles.arrowLeft}
            />

            <ArrowRight
                size={80}
                color="var(--maiz)"
                className={styles.arrowRight}
            />

            <div className={styles.CasosDeExitoContent}>

                <CardComentario
                    img={Foto1}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                />

                <CardComentario
                    img={Foto2}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                />

                <CardComentario
                    img={Foto1}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                />

                <CardComentario
                    img={Foto2}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                />

            </div>
        </section>
    );
};

export default CasosDeExito;
