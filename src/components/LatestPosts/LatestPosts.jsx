import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './LatestPosts.module.scss';
import PostCard from '../common/PostCard/PostCard';

const LatestPosts = () => {
    const posts = [
        { image: 'path-to-image1.jpg', title: 'HOME-MADE SCRUBS - ORGANIC', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { image: 'path-to-image2.jpg', title: 'HOME-MADE SCRUBS - ORGANIC', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { image: 'path-to-image3.jpg', title: 'DOES PERFUME REALLY DESTROY YOUR SKIN?', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { image: 'path-to-image4.jpg', title: 'LOREM IPSUM', description: 'Lorem ipsum dolor sit amet consectetur.' },
        { image: 'path-to-image5.jpg', title: 'LOREM IPSUM', description: 'Lorem ipsum dolor sit amet consectetur.' },
    ];

    return (
        <Container className={styles.latestSection}>
            <h2 className={styles.sectionTitle}>Latest</h2>
            <Row>
                {posts.slice(0, 3).map((post, index) => (
                    <Col md="4" className="mb-4" key={index}>
                        <PostCard {...post} layout="vertical" />
                    </Col>
                ))}
                {posts.slice(3).map((post, index) => (
                    <Col md="6" className="mb-4" key={index}>
                        <PostCard {...post} layout="horizontal" />
                    </Col>
                ))}
            </Row>
            <Button color="dark" className={styles.viewAll}>
                View All
            </Button>
        </Container>
    );
};

export default LatestPosts;