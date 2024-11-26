import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Button } from "reactstrap";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <Navbar className={styles.header} expand="md" light>
            <Container fluid className={styles.headerTagline}>
                <p>Whooo! dreams come true!!</p>
            </Container>
            <Container fluid className={styles.headerNavbar}>
                <NavbarBrand href="/" className={styles.logo}>
                    <img src={require("../../assets/logo.png")} alt="Main Logo" />
                </NavbarBrand>
                <Nav className={styles.navBar} navbar>
                    <NavItem className={styles.navItem}>
                        <NavLink href="/home" className={styles.navLink}>HOME</NavLink>
                    </NavItem>
                    <NavItem className={styles.navItem}>
                        <NavLink href="/products" className={styles.navLink}>PRODUCTS</NavLink>
                    </NavItem>
                    <NavItem className={styles.navItem}>
                        <NavLink href="/blogs" className={styles.navLink}>BLOGS</NavLink>
                    </NavItem>
                </Nav>
                <Button color="dark" type="button" className={styles.button}>Button</Button>
            </Container>
        </Navbar>
    );
};

export default Header;