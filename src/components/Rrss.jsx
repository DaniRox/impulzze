import React from "react";
import styles from "@/components/Rrss.module.css";

const Rrss = () => {
    return (
        <div className={styles.Rrss__content}>

            <button className={styles.Rrss__icon}>
                <img src="/images/phone.png" alt="" className={styles.Rrss_imgIcon}/>
            </button>

            <button className={styles.Rrss__icon}>
            <img src="/images/ig.png" alt="" className={styles.Rrss_imgIcon}/>
            </button>

            <button className={styles.Rrss__icon}>
            <img src="/images/in.png" alt="" className={styles.Rrss_imgIcon}/>
            </button>

            <button className={styles.Rrss__icon}>
            <img src="/images/mail.png" alt="" className={styles.Rrss_imgIcon}/>
            </button>

        </div>
    );
};

export default Rrss;
