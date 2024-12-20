import React from "react";
import styles from "./MainBanner.module.scss";
import { Button, Container } from "reactstrap";

const MainBanner = () => {
    return (
        <Container fluid className={styles.banner}>
            <div className={styles.content}>
                <p>COSMETICS</p>
                <h4>BEST MAKE-UP PRODUCTS 2023</h4>
                <Button color="dark" type="button" className={styles.readMoreBtn}>READ MORE</Button>
            </div>
        </Container>
    );
};

export default MainBanner;