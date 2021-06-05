import React from 'react';
import Group from '../groups/group/group';
import styles from './preview.module.css';

const Preview = ({groups}) => (
<section className={styles.preview}>
    <div className={styles.header}>
    <h1 className={styles.title}>새로 생긴 모임</h1>
    <p className={styles.see_entire}>전체 보기</p>
    </div>
    <ul>
        {groups.map(group => (
            <Group group = {group} />
        ))}
    </ul>
    </section>
);

export default Preview;