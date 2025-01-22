import React from 'react';
import styles from './CardComentario.module.css';

const CardComentario = ({ img, title, text }) => {
    return (
        <div className={styles.CardComentario}>
            <div className={styles.CardComentario__img}>
                <img src={img} alt={title} className={styles.CardComentario__foto} />
            </div>
            <p className={styles.CardComentario__text}>"{text}"</p>
        </div>
    );
};

export default CardComentario;
