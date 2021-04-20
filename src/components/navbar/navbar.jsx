import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
            
    return(
        <>
        <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <a href="#">BookShare</a>
        </div>
        <div className={styles.navbar__menu}>
        <ul className={styles.navbar__menu__center}>
                <li className={styles.navbar__menu__item} data-link="#best">테스트1</li>
                <li className={styles.navbar__menu__item} data-link="#steady">테스트2</li>
                <li className={styles.navbar__menu__item} data-link="#steady">테스트3</li>
                <li className={styles.navbar__menu__item} data-link="#steady">테스트4</li>
            </ul>

            <ul className={styles.navbar__menu}>
                <li className={styles.navbar__menu__item} data-link="#best">로그인</li>
                <li className={styles.navbar__menu__item} data-link="#steady">마이페이지</li>
            </ul>
        </div>
        <button className={styles.navbar__toggle_btn}>Login</button>
    </nav>
    </>
    )
};

export default Navbar;