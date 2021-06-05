import React, { useState } from 'react';
import Preview from '../preview/preview';
import styles from './maker.module.css';


const Maker = () => {

    const [groups, setGroups] = useState([
        {
        id: '1',
        name: '맛탐',
        description: '요리 관련 토론을 하는 모임입니다.',
        theme: 'light',
        fileURL: null,
        },
        {
            id: '2',
            name: '모각코',
            description: '개발자들의 독서 모임입니다.',
            theme: 'light',
            fileURL: null,
            },
            {
                id: '3',
                name: '주갤',
                description: '주식에 대해서 이야기하실 분',
                theme: 'light',
                fileURL: null,
                },
                {
                    id: '4',
                    name: '자기계발',
                    description: '자기계발서를 읽고 대화합니다.',
                    theme: 'light',
                    fileURL: null,
                    },
    ]);

    return (
        <section className={styles.maker}>
            <div className={styles.container}>
                <Preview groups={groups}/>
            </div>
        </section>
    );
};

export default Maker;