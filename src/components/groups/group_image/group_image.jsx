import React, { memo } from 'react';
import styles from './group_image.module.css';

const DEFAULT_IMAGE = "/images/book.jpeg";
const GroupImage = memo(({ GroupImage }) => {
    const {
        name,
        message,
        theme,
        fileURL,
    } = GroupImage;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.group_image} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.message}>{message}</p>
            </div>
        </li>
    );
});

function getStyles(theme) {
    switch (theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default GroupImage;