import React from 'react';
import styles from "./CardFreelancers.module.css";

const CardFreelancers = ({ Icon, title, text }) => {
    return (
        <div className={styles.CardFreelancers}>
            <div className={styles.CardFreelancers__icon}>
                <Icon size={20} color="var(--dark)" />
            </div>
            <h3 className={styles.CardFreelancers__title}>{title}</h3>
            <p className={styles.CardFreelancers__text}>{text}</p>
        </div>
    );
};

export default CardFreelancers;
