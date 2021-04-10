import React, { memo, useRef } from 'react';
import styles from './header.module.css';


const Header = memo(({onSearch}) => {
    const inputRef = useRef();

    const handelSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onClick = () => {
        handelSearch(inputRef);
    };

    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handelSearch();
        }
    };

        return (
            <section className={styles.header}>
            <div className={styles.header__container}>
                {/* <img src alt="new Restaurant" className={styles.new__avatar}/> */}
                <h1 className={styles.header__title}> 북 쉐어 </h1>
                <h2 className={styles.header__description}>책을 공유하다</h2>
            </div>
            <input
            ref={inputRef} 
            className={styles.input} type="search" placeholder="찾는 책이 있나요?" onKeyPress={onKeyPress} />
            <button className={styles.button} type="submit" onClick={onClick} >
                <img className={styles.buttonImg} src="/images/search.png" alt="검색"/>
            </button>
        </section>
        );        

});


export default Header;