import React from "react";
import styles from "./MainBanner.module.scss";

const MainBanner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h5>COSMETICS</h5>
                    <h1>BEST MAKE-UP PRODUCTS 2023</h1>
                    <button className={styles.readMore}>READ MORE</button>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;