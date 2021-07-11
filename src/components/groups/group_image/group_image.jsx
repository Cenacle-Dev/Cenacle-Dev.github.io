import React, { memo, useRef, useState } from 'react';
import styles from './group_image.module.css';

// const DEFAULT_IMAGE = "/images/book.jpeg";
const GroupImage = memo(({ fileURL }) => {

    const groupImage = {
        title: 'BookShare',
        tag: '#독서 #모임 #그룹',
    }
    const url = fileURL;

    return (
        <li className={styles.group_image} >
            <img className={styles.avatar} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.title}>{groupImage.title}</h1>
                <p className={styles.tag}>{groupImage.tag}</p>
            </div>
        </li >
    );
});

export default GroupImage;