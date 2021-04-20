import React, { useState } from 'react';
import styles from './swiper.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Navbar from '../navbar/navbar';

const Swiper = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const prevSlide = () => {
        setCurrent(current === 0? length - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

        return (
            <section className={styles.swiper}>
                <IoIosArrowBack className={styles.left_arrow} onClick={prevSlide} />
                <IoIosArrowForward className={styles.right_arrow} onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                <div 
                className={(index === current) ? `${styles.swipe_active}` : `${styles.swipe}`}
                key = {index}
                >
                    {index === current && (
                <img className={styles.image} src={slide.image} alt="book image" />
                    )}
                </div>
                );
            })}
            </section>
            
        );
};

export default Swiper;