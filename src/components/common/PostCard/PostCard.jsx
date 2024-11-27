import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap';
import styles from './PostCard.module.scss';

const PostCard = ({ image, title, description, layout = 'vertical' }) => {
    return (
        <Card className={`${styles.postCard} ${layout === 'horizontal' ? styles.horizontal : ''}`}>
            <CardImg top width="100%" src={image} alt={title} className={styles.cardImage} />
            <CardBody>
                <CardTitle tag="h5" className={styles.cardTitle}>
                    {title}
                </CardTitle>
                <CardText className={styles.cardText}>{description}</CardText>
                <Button color="dark" className={styles.readMore}>
                    Read More
                </Button>
            </CardBody>
        </Card>
    );
};

export default PostCard;