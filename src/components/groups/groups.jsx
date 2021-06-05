import React, { Component } from 'react';
import Group from './group/group';
import styles from './groups.module.css';

class Groups extends Component {
    render() {
        return (
            <div className={styles.groups}>
                <section className={styles.section}>
                    <h2>새로 생긴 모임둘들</h2>
                    {this.props.groups.map(group => (
                        <Group
                        />
                    ))}
                    </section>
            </div>
        );
    }
}

export default Groups;