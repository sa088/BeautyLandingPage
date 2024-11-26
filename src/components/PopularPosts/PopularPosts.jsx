import React from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./PopularPosts.module.scss";

const posts = [
    {
        id: 1,
        image: "path-to-image1.jpg",
        title: "HOME-MADE SCRUBS - ORGANIC",
        description: "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    },
    {
        id: 2,
        image: "path-to-image2.jpg",
        title: "HOME-MADE SCRUBS - ORGANIC",
        description: "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    },
    {
        id: 3,
        image: "path-to-image3.jpg",
        title: "fasfaffas",
        description: "Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...",
    },
];

const PopularPosts = () => {
    return (
        <section className={styles.popularPosts}>
            <Container>
                <h2 className={styles.title}>POPULAR POSTS</h2>
                <Row>
                    {posts.map((post) => (
                        <Col md="4" sm="6" xs="12" key={post.id} className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                                <h5 className={styles.postTitle}>{post.title}</h5>
                                <p className={styles.description}>{post.description}</p>
                                <button className={styles.readMore}>READ MORE</button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PopularPosts;