import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
            
    return(
        <>
        <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <a href="/">BookShare</a>
        </div>
        <div className={styles.navbar__menu}>
            <ul className={styles.navbar__menu}>
                <li className={styles.navbar__menu__item}><a href="/login">로그인</a></li>
                <li className={styles.navbar__menu__item} data-link="#steady">마이페이지</li>
            </ul>
        </div>
        <button className={styles.navbar__toggle_btn}>Login</button>
    </nav>
    </>
    )
};

export default Navbar;