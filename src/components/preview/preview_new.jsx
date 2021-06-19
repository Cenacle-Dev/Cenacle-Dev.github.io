import React, { useState } from 'react';
import Group from '../groups/group/group';
import styles from './preview_new.module.css';

const PreviewNew = ({groups}) => {
    const [current, setCurrent] = useState(0);
    const length = groups.length;
    const prevSlide = (idx) => {
        setCurrent(current === 0? length - 1 : current - 1);
    };
    const nextSlide = (idx) => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
return (
<section className={styles.preview}>
    <div className={styles.header}>
    <h1 className={styles.title}>새로 생긴 모임</h1>
    <p className={styles.see_entire}>전체 보기</p>
    </div>
    <ul>
        {groups.map(group => (
            <Group key={group.id} group = {group} />
        ))}
    </ul>
    </section>
    );
};


export default PreviewNew;