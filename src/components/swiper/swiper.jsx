import React, { useState } from 'react';
import styles from './swiper.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Swiper = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const prevSlide = (idx) => {
        setCurrent(current === 0? length - 1 : current - 1);
    };
    const nextSlide = (idx) => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

        return (
            <section className={styles.swiper}>
                <div className={styles.prevBanner} onClick={prevSlide}>
            <IoIosArrowBack className={styles.left_arrow} />
            </div>
            <div className={styles.nextBanner} onClick={nextSlide}>
                <IoIosArrowForward className={styles.right_arrow} />
                </div>
            {slides.map((slide, index) => {
                return (
                <div 
                className={(index === current) ? `${styles.swipe_active}` : `${styles.swipe}`}
                key = {index}
                >
                    {index === current && (
                <img className={styles.image} src={slide.image} alt="book_image" />
                    )}
                </div>
                );
            })}
            
            </section>
            
        );
};

export default Swiper;