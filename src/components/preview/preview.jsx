import React from 'react';
import Group from '../groups/group/group';
import styles from './preview.module.css';

const Preview = ({groups}) => (
<section className={styles.preview}>
    <h1 className={styles.title}>새로 생긴 모임</h1>
    <ul>
        {groups.map(group => (
            <Group group = {group} />
        ))}
    </ul>
    </section>
);

export default Preview;