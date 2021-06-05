import React from 'react';
import styles from './group.module.css';

const DEFAULT_IMAGE = "/images/book.jpeg";
const Group = ({group}) => {
    const {
        name, 
        description, 
        theme, 
        fileURL,
    } = group;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.group} ${getStyles(theme)}`}>
            <img className={styles.avatar} src={url} alt="title_image" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
}

function getStyles(theme){
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

export default Group;