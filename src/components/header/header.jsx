import React, { memo, useRef } from 'react';
import { SwiperData } from '../../service/swiperData';
import Swiper from '../swiper/swiper';
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
                {/* 헤더 안에 스와이퍼 컴포넌트가 있을 필요가 있나? 헤더 대신 스와이퍼만 해도 되지 않나? 꼭 이렇게 구현해야 할 이유가 있나? */}
                <Swiper slides={SwiperData}/>
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